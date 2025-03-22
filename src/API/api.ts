import axios from "axios";

export async function fetchAssets() {
    const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/24hr`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    );
    return response.data;
}