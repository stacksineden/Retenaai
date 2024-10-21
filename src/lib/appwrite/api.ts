import {
  CreateGenerations,
  INewUser,
  IUpdateCredit,
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
      user.name
    );
    if (!newAccount) throw Error;
    //create session to verify user
    const session = await account.createEmailSession(user.email, user.password);

    if (session) {
      const verifyUser = await account.createVerification(
        `${import.meta.env.VITE_RETENAAI_BASE_URL}/verify-user`
      );
      if (verifyUser) {
        const avatarUrl = avatars.getInitials(user.name);
        const newUser = await saveUserToDB({
          accountId: newAccount.$id,
          email: newAccount.email,
          name: newAccount.name,
          imageUrl: avatarUrl,
          creditBalance: 5,
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
  creditBalance: number;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (err) {
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
      appwriteConfig.userCollectionId,
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

export async function getUserGenerations(userId?: string) {
  try {
    if (!userId) return;
    const generationgData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.generationsCollectionId,
      [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
    );
    if (!generationgData) return;
    return generationgData;
  } catch (err) {
    console.log(err, ""); 
  }
}

export async function getUserPhotoshoot(userId?: string){
  try {
    if (!userId) return;
    const generationgData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.photoshootCollectionId,
      [Query.equal("customerID", userId), Query.orderDesc("$createdAt")]
    );
    if (!generationgData) return;
    return generationgData;
  } catch (err) {
    console.log(err, ""); 
  }
}

export async function getAllPhotoshoots(){
   try{
    const allPhotoshoots = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.photoshootCollectionId,
    )
   if(!allPhotoshoots) return;
   return allPhotoshoots;
   }catch (err) {
    console.log(err, ""); 
  }
}

export async function getAllGenerations() {
  try {
    const generatedData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.generationsCollectionId,
    );
    if (!generatedData) return;
    return generatedData;
  } catch (err) {
    console.log(err, "");
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    return error;
  }
}
