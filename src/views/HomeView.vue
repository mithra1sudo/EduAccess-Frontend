<template>
  <v-container>
    <!--Hero Section with Background Image Carousel-->
    <v-row justify="center" class="text-center my-10">
      <v-col cols="12" md="8">
        <v-carousel cycle height="500" hide-delimiters>
          <v-carousel-item v-for="(image, index) in heroImages" :key="index" :src="image" contain></v-carousel-item>
        </v-carousel>
        <h1 class="text-h3 font-weight-bold mt-4">Bridging the Gap in Education for Everyone!</h1>
        <p class="text-subtitle-1 mt-4">Access quality education, mentorship, and scholarships—anytime, anywhere.</p>
        <v-btn color="primary" class="mt-4" to="/signup">Get Started</v-btn>
        <v-btn outlined color="primary" class="mt-4 ml-2" to="/features">Explore Features</v-btn>
      </v-col>
    </v-row>

    <!--Key Features Section-->
    <v-row class="my-10" justify="center">
      <v-col cols="12" md="6" lg="3" v-for="feature in features" :key="feature.title">
        <v-card class="pa-4" outlined>
          <v-img :src="feature.image" :alt="feature.title" contain height="150"></v-img>
          <h2 class="text-h6 mt-3">{{  feature.title }}</h2>
          <p class="text-body-2">{{  feature.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <!--Testimonials Section-->
    <v-row class="my-10 text-center" justify="center">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold">What Our Users Say</h2>
      </v-col>
      <v-col cols="12" md="6" v-for="testimonial in testimonials" :key="testimonial.name">
        <v-card class="pa-4">
          <v-img :src="testimonial.image" :alt="testimonial.name" contain height="100" class="rounded-circle mb-3"></v-img>
          <p class="text-body-2">"{{ testimonial.quote }}"</p>
0          <h4 class="text-subtitle-1 mt-2 font-weight-bold">- {{ testimonial.name }}</h4>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data(){
    return{
      heroImages: [
        "/image.jpg",
        "/image6.webp",
        "/prigraduate.jpg",
        "/image3.webp",
        "/image1.jpg",
        "/image2.webp",
        "/image3.webp",
      ],
      features: [
        { title: "Offline Learning", description: "Access materials without the internet.", image: "/offline.jpg" },
        { title: "Scholarships & Funding", description: "Find opportunities to support your education.", image: "/scholarship.jpg" },
        { title: "Remote Learning", description: "Learn from anywhere with interactive tools.", image: "/image6.webp" },
        { title: "Mentorship", description: "Connect with mentors and educators worldwide.", image: "/mentor1.jpg" }
      ],
      testimonials: [
        { name: "John Defoe, Computer Science Graduate", quote: "I can't believe I've finally graduated! EduBridge made my dream a reality by connecting me with a scholarship that funded my entire degree. The support didn't stop there—I received mentorship and career guidance that helped me land my first job. I am forever grateful for this opportunity!", image: "/malegraduate.jpg" },
        { name: "Mary Nyambura, Aspiring Software Engineer", quote: "The mentorship program at EduBridge changed my life! I was struggling to navigate my career path, but my mentor guided me every step of the way. From resume building to interview preparation, I gained the confidence and skills I needed. Now, I’ve secured an internship at a top company!", image: "/femalegraduate.jpg" }
      ]
    };
  }
};
</script>
