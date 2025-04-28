"// Auth service placeholder" 
export function useAuth() {
    const loading = ref(false);
    const error = ref(null);
    const success = ref(null);

    async function resetPassword(email) {
        loading.value = true;
        error.value = null;
        success.value = null;

        try {
            // Simulating password reset logic
            await new Promise(resolve => setTimeout(resolve, 2000));
            success.value = "Password reset link sent!";
        } catch (err) {
            error.value = "Failed to reset password.";
        } finally {
            loading.value = false;
        }
    }

    return { resetPassword, loading, error, success };
}
