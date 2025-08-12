import {
  ContractPayload,
  CreateGenerations,
  INewUser,
  IUpdateCredit,
  IUpdateStage,
  TrainingPayload,
} from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID, Query } from "appwrite";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.firstName + " " + user.lastName
    );
    if (!newAccount) throw Error;
    //create session to verify user
    const session = await account.createEmailSession(user.email, user.password);

    if (session) {
      const verifyUser = await account.createVerification(
        `${import.meta.env.VITE_RETENAAI_BASE_URL}/verify-user`
      );
      if (verifyUser) {
        const avatarUrl = avatars.getInitials(
          user.firstName + " " + user.lastName
        );
        const newUser = await saveUserToDB({
          accountId: newAccount.$id,
          email: newAccount.email,
          name: newAccount.name,
          imageUrl: avatarUrl,
          cohort: "2",
          country: user.country,
          state: user.state,
          phoneNumber: user.phoneNumber,
          stage: "prospect",
          isActivated: false,
        });
        return newUser;
      }
      if (!verifyUser) {
        console.log("error sending email");
      }
    }
  } catch (err) {
    return err;
  }
}

export async function updateUserVerification(userId: string, secret: string) {
  try {
    const verifiedAccount = await account.updateVerification(userId, secret);
    if (verifiedAccount) {
      return verifiedAccount;
    } else {
      console.log("verification failed");
    }
  } catch (err) {
    return err;
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  cohort: string;
  country: string;
  state: string;
  phoneNumber: string;
  stage: string;
  isActivated: boolean;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.retenansCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (err) {
    return err;
  }
}

export async function updateUserStageStatus(payload: IUpdateStage) {
  try {
    const userStage = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.retenansCollectionId,
      payload?.userId,
      {
        stage: payload.stage,
        program: payload.program,
        programId: payload.ProgamId,
      }
    );
    if (!userStage) throw new Error();
    console.log("user stage updated", userStage);
    return userStage;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function updateUserCreditBalance(payload: IUpdateCredit) {
  try {
    const userCredit = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      payload?.userId,
      {
        creditBalance: payload.balance,
      }
    );
    if (!userCredit) throw new Error();
    return userCredit;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);
    localStorage.setItem("user_country_code", session?.countryCode);
    return session;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function forgotPassword(email: string) {
  try {
    const response = await account.createRecovery(
      email,
      `${import.meta.env.VITE_RETENAAI_BASE_URL}/reset-password`
    );
    if (response) {
      return response;
    } else {
      console.log("reset password failed");
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function resetPassword(
  userId: string,
  secret: string,
  new_password: string,
  confirm_password: string
) {
  try {
    const response = await account.updateRecovery(
      userId,
      secret,
      new_password,
      confirm_password
    );
    if (response) {
      return response;
    } else {
      console.log("reset password failed");
    }
  } catch (err) {
    return err;
  }
}

export function googleOauth() {
  try {
    account.createOAuth2Session(
      "google",
      `${import.meta.env.VITE_RETENAAI_BASE_URL}`,
      `${import.meta.env.VITE_RETENAAI_BASE_URL}/sign-in`
    );
    getCurrentUser();
  } catch (err) {
    return err;
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.retenansCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    const userObject = {
      currentUser: currentUser.documents[0],
      currentAccount,
    };
    return userObject;
  } catch (err) {
    console.log(err, "");
  }
}

// post training data
export async function createTraining(payload: TrainingPayload) {
  try {
    const training = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.trainingCollectionId,
      ID.unique(),
      {
        creator: payload?.userId,
        prompt: payload?.prompt,
        PrimaryStyle: payload?.PrimaryStyle,
        secondaryStyle: payload?.secondaryStyle,
        images: payload?.images,
        triggerWord: payload?.triggerWord,
        isPublic: payload?.isPublic,
        trainingStatus: payload?.trainingStatus,
        txRef: payload?.txRef,
      }
    );
    if (!training) throw new Error();
    return training;
  } catch (err) {
    console.log(err, "");
  }
}

//create contract

export async function createContract(payload: ContractPayload) {
  try {
    const contract = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.contractsCollectionId,
      ID.unique(),
      {
        subject: payload.subject,
        AdditionalInfo: payload.AdditionalInfo,
        BusinessType: payload.BusinessType,
        Budget: payload.Budget,
        email: payload.email,
      }
    );

    if (!contract) throw new Error();
    return contract;
  } catch (err) {
    console.log(err, "err");
  }
}

//get training all data requests
export async function getAllTrainingData() {
  try {
    const trainingData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.trainingCollectionId
    );
    if (!trainingData) return;
    return trainingData;
  } catch (err) {
    console.log(err, "");
  }
}

//get training set for a user
export async function getUserTrainingData(userId?: string) {
  try {
    if (!userId) return;
    const trainingData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.trainingCollectionId,
      [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
    );
    if (!trainingData) return;
    return trainingData;
  } catch (err) {
    console.log(err, "");
  }
}

export async function createUserGeneration(payload: CreateGenerations) {
  try {
    const generation = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.generationsCollectionId,
      ID.unique(),
      {
        creator: payload?.creator,
        prompt: payload?.prompt,
        catergory: payload?.catergory,
        url: payload?.url,
      }
    );
    if (!generation) throw new Error();
    return generation;
  } catch (err) {
    console.log(err, "");
  }
}

export async function getUserGenerations({
  userId,
  pageParam = undefined,
}: {
  userId?: string;
  pageParam?: string;
}) {
  try {
    if (!userId) return;
    // Create an array of queries
    const queries: string[] = [
      Query.limit(25),
      Query.orderDesc("$createdAt"),
      Query.equal("creator", userId),
      pageParam ? Query.cursorAfter(pageParam) : null, // Add cursorAfter if available
    ].filter((q): q is string => q !== null);

    const generationgData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.generationsCollectionId,
      queries
    );
    if (!generationgData) return;
    return generationgData;
  } catch (err) {
    console.log(err, "");
  }
}

export async function getUserPhotoshoot({
  userId,
  pageParam = undefined,
}: {
  userId?: string;
  pageParam?: string;
}) {
  try {
    if (!userId) return;
    // Create an array of queries
    const queries: string[] = [
      Query.limit(25),
      Query.orderDesc("$createdAt"),
      Query.equal("customerID", userId),
      pageParam ? Query.cursorAfter(pageParam) : null,
    ].filter((q): q is string => q !== null);

    const generationgData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.photoshootCollectionId,
      queries
    );
    if (!generationgData) return;
    return generationgData;
  } catch (err) {
    console.log(err, "");
  }
}

export async function getAllPhotoshoots() {
  try {
    const allPhotoshoots = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.photoshootCollectionId
    );
    if (!allPhotoshoots) return;
    return allPhotoshoots;
  } catch (err) {
    console.log(err, "");
  }
}

export async function getAllCodes() {
  try {
    const allCodes = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.bonusesCollectionId
    );
    if (!allCodes) return;
    return allCodes;
  } catch (err) {
    console.log(err, "");
  }
}

export async function verifyCode(code: string) {
  try {
    const result = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.bonusesCollectionId,
      [Query.equal("code", code), Query.equal("isValid", true)]
    );
    if (result.documents.length === 0)
      throw new Error("Invalid or expired code.");
    return result.documents[0];
  } catch (err) {
    console.log(err, "");
  }
}

export async function getAllGenerations({
  pageParam = undefined,
}: {
  pageParam?: string;
}) {
  try {
    // Create an array of queries
    const queries: string[] = [
      Query.limit(25),
      Query.orderDesc("$createdAt"),
      pageParam ? Query.cursorAfter(pageParam) : null, // Add cursorAfter if available
    ].filter((q): q is string => q !== null); // Explicitly filter out null values

    // Make the API call
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.generationsCollectionId,
      queries // Pass the filtered array of strings
    );

    return {
      documents: response.documents,
      nextCursor: response.documents.length
        ? response.documents[response.documents.length - 1].$id
        : undefined,
    };
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw new Error("Error fetching documents");
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    localStorage.clear();
    return session;
  } catch (error) {
    return error;
  }
}
