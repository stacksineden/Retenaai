import {
  CreateGenerations,
  INewUser,
  IUpdateCredit,
  TrainingPayload,
} from "@/types";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  createTraining,
  createUserAccount,
  createUserGeneration,
  getAllGenerations,
  getAllPhotoshoots,
  // getAllPhotoshoots,
  getAllTrainingData,
  getUserGenerations,
  getUserPhotoshoot,
  getUserTrainingData,
  signInAccount,
  signOutAccount,
  updateUserCreditBalance,
} from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

// export const useGoogleOauth = () => {
//     return useMutation({
//         mutationFn: () => googleOauth(),
//       });
// }

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useUpdateUserCreditBalance = () => {
  return useMutation({
    mutationFn: (payload: IUpdateCredit) => updateUserCreditBalance(payload),
  });
};
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount(),
  });
};

export const useCreateTraining = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TrainingPayload) => createTraining(data),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_TRAINING_DATA],
      }),
  });
};

export const useCreateUserGeneration = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateGenerations) => createUserGeneration(data),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USER_GENERATIONS],
      }),
  });
};

export const useGetAllTrainingData = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_TRAINING_DATA],
    queryFn: () => getAllTrainingData(),
    refetchOnWindowFocus: false,
  });
};

export const useGetUserTrainingData = (userId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_TRAINING_DATA, userId],
    queryFn: () => getUserTrainingData(userId),
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });
};

export const useGetUserPhotoshoot = (userId?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_USER_PHOTOSHOT, userId],
    queryFn: ({ pageParam = undefined }: { pageParam?: string }) =>
      getUserPhotoshoot({ userId, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.documents.length) {
        return lastPage.documents[lastPage.documents.length - 1].$id;
      }
      return undefined; // Return undefined if there are no more pages
    },
    enabled: !!userId, // Only enable query if userId is provided
    initialPageParam: undefined,
    refetchOnWindowFocus: false,
  });
};


export const useGetUserGenerations = (userId?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_USER_GENERATIONS, userId],
    queryFn: ({ pageParam = undefined }: { pageParam?: string }) =>
      getUserGenerations({ userId, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.documents.length) {
        return lastPage.documents[lastPage.documents.length - 1].$id;
      }
      return undefined; // Return undefined if there are no more pages
    },
    enabled: !!userId, // Only enable query if userId is provided
    initialPageParam: undefined,
    refetchOnWindowFocus: false,
  });
};

export const useGetAllGenerations = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_ALL_GENERATIONS], // Add your query key
    queryFn: ({ pageParam = undefined }: { pageParam?: string }) =>
      getAllGenerations({ pageParam }), // Pass pageParam to the fetch function
    getNextPageParam: (lastPage) => lastPage.nextCursor, // Define how to get the next page's param
    initialPageParam: undefined, // Set the initialPageParam (could be 0, undefined, etc., depending on your API)
    refetchOnWindowFocus: false, // Optional: prevents refetching when the window is refocused
  });
};


export const useGetAllPhotoshoots = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_PHOTOSHOOTS],
    queryFn: () => getAllPhotoshoots(),
    refetchOnWindowFocus: false,
  });
}