import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export const POST = async (req: NextRequest) => {
  const getString = await req.json();
  let data = await axios.post("https://vercel.com/hamzasaslam/node-js-server-yupz/F4ARpkQHKNhMqrTuMz1xxUVpLNYW", getString);
  return NextResponse.json({ message: "I am iron man", data });
};
