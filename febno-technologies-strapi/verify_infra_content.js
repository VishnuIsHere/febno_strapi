import axios from 'axios';

const verify = async () => {
    try {
        const response = await axios.get('http://localhost:1337/api/infrastructure-managed-service?populate=*');
        console.log("Status:", response.status);
        console.log("Data:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
        }
    }
};

verify();
