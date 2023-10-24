import { Profile } from "@/utils/api/api";
import axios from "axios";

/**
 * プロフィールを取得します
 */
export async function GetProfile(): Promise<Profile> {
  const apiUrl = `${process.env.NEXT_PUBLIC_BE_URL}/api/profile`;

  try {
    const response = await axios.get<Profile>(apiUrl);

    return response.data;
  } catch (error) {
    throw error;
  }
}