<template>
    <div class="features-container">
      <h1 class="text-3xl font-bold text-center my-6">Key Features</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
          <div class="icon-container">
            <component :is="feature.icon" class="feature-icon" />
          </div>
          <h2 class="text-xl font-semibold">{{ feature.title }}</h2>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { BookOpenIcon, AcademicCapIcon, GlobeAltIcon, TranslateIcon, UsersIcon } from '@heroicons/vue/outline';

  export default {
    data() {
      return {
        features: [
          { id: 1, title: "Offline Learning", description: "Access learning materials without an internet connection.", icon: BookOpenIcon },
          { id: 2, title: "Scholarships & Funding", description: "Find scholarships and funding opportunities.", icon: AcademicCapIcon },
          { id: 3, title: "Remote Learning", description: "Learn from anywhere with our digital platform.", icon: GlobeAltIcon },
          { id: 4, title: "Language & Literacy Support", description: "Tools to help improve language skills.", icon: TranslateIcon },
          { id: 5, title: "Teacher & Volunteer Network", description: "Connect with educators and volunteers.", icon: UsersIcon }
        ]
      };
    }
  };
  </script>

  <style scoped>
  .features-container {
    max-width: 1200px;
    margin: auto;
  }

  .feature-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;
  }

  .feature-card:hover {
    transform: translateY(-5px);
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .feature-icon {
    width: 40px;
    height: 40px;
    color: #4F46E5;
  }
  </style>
  