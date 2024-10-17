// import { useGoogleOauth } from "@/lib/tanstack-query/queriesAndMutation";

// import { googleOauth } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/config";


const Oauth = () => {
  // const { mutateAsync: googleOauth } = useGoogleOauth();

  // const handleOauth = async () => {
  //   try {
  //     const response = googleOauth();
  //     console.log(response)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  async function handleOauth() {
    account.createOAuth2Session(
      'google',
      "http://localhost:5173/",
      "http://localhost:5173/sign-in"
    );
  }

  return (
    <div
      className="my-4 w-full border shadow p-2 border-accent flex justify-center items-center rounded-md cursor-pointer gap-1"
      onClick={handleOauth}
    >
      <img
        src="/assets/google.png"
        alt="google"
        className="w-7 h-7 object-contain"
      />
      <p className="text-primary-black text-sm font-medium">Google</p>
    </div>
  );
};

export default Oauth;
