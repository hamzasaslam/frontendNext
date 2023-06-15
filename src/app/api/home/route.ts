import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export const POST = async (req: NextRequest) => {
  const getString = await req.json();
  console.log('getString =>', getString);
  let res = await axios.post("https://node-js-server-git-main-hamzasaslam.vercel.app/data", {value: getString.data});
  return NextResponse.json(res.data);
};
