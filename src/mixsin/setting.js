import axios from "axios";

async function getSetting() {
  try {
    const response = await axios.get("https://saytmaster.rf.gd/api/get-setting");
    return response;
  } catch (error) {
    return error;
  }
}

export default await getSetting();