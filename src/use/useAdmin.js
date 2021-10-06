import { ref } from "vue";

const isAdmin = ref(false);

export default function useAdmin() {
    return {
        isAdmin,
    }
}