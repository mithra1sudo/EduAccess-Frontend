<template>
  <div class="landing-container">
    <h2>Welcome, {{ user.name }}!</h2>
    <p>Redirecting you to your dashboard...</p>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) ||{}, // Retrieve user info from local storage
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.user.role === "student") {
        this.$router.push("/student-dashboard");
      }else if (this.user.role === "teacher") {
        this.$router.push("/teacher-dashboard");
      }else if (this.user.role === "mentor"){
        this.$router.push("/mentor-dashboard");
      }else if (this.user.role === "admin") {
        this.$router.push("/admin-dashboard");
      }else {
        this.$router.push("/"); // Default to home if role is unknown
      }
    }, 2000); // 2-second delay for smooth transition between dashboards
  },
};
</script>

<style scoped>
.landing-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to right, #e0f7fa, #b3e5fc);
  font-size: 1.5rem;
}

.loader {
  margin-top: 20px;
  border: 4px solid #b3e5fc;
  border-top: 4px solid #0277bd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
</style>