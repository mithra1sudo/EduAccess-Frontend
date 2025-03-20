<template>
  <v-container>
    <v-row justify="center" class="text-center my-10">
      <v-col cols="12" md="8">
        <h1 class="text-h3 font-weight-bold">About EduAccess</h1>
        <p class="text-subtitle-1 mt-4">
          EduAccess was founded with the vision of making quality education accessible to all.
          Over the years, we have impacted thousands of students by providing offline learning materials,
          scholarships, mentorship, and remote learning tools.
        </p>
      </v-col>
    </v-row>

    <!--Achievements Section-->
    <v-row class="my-10" justify="center">
      <v-col cols="12" md="6" lg="3" v-for="achievement in achievements" :key="achievement.title">
        <v-card class="pa-4" outlined>
          <v-img :src="achievement.image" :alt="achievement.title" contain height="150"></v-img>
          <h2 class="text-h6 mt-3">{{ achievement.title }}</h2>
          <p class="text-body-2">{{ achievement.description }}</p>
        </v-card>
      </v-col>
    </v-row>


  <!--Leadership Team Section-->
  <v-row class="my-10 text-center" justify="center">
    <v-col cols="12">
      <h2 class="text-h4 font-weight-bold">Our Leadership Team</h2>
    </v-col>
    <v-col cols="12" md="4" v-for="leader in leadershipTeam" :key="leader.name">
      <v-card class="pa-4">
        <v-img :src="leader.image" :alt="leader.name" contain height="150" class="rounded-circle mb-3"></v-img>
          <h4 class="text-subtitle-1 font-weight-bold">{{ leader.name }}</h4>
          <p class="text-body-2">{{ leader.position }}</p>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      achievements: [
        { title: "10,000+ Students Impacted", description: "Providing quality education to underprivileged students.", image: "/graduate1.jpg" },
        { title: "500+ Scholarships Awarded", description: "Helping students achieve their academic dreams.", image: "/graduate2.jpg" },
        { title: "Global Mentorship Network", description: "Connecting students with mentors worldwide.", image: "/image8.jpg" }
      ],
      leadershipTeam: [
      { name: "Dr. Alfred Adambo", position: "Founder & CEO", image: "/man.jpg" },
      { name: "Alvin Buyanzi", position: "Chief Technology Officer", image: "/Alvin.JPG" },
      { name: "Samantha Davis", position: "Director of Education", image: "/woman.jpg" }
    ]
    };
  }
};
</script>


<style scoped>
.text-center {
  text-align: center;
}
.rounded-circle {
  border-radius: 50%;
}
</style>
