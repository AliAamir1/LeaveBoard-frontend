import axios from "axios";
import { API_URLS } from "../../config";

const resetCompare = async (id, password) => {
  try {
    const response = await axios.post(
      `${API_URLS.RESET_COMPARE}/${id}`,
      {
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error updating:", error);
  }
};

export { resetCompare };
