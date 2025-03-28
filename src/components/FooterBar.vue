 <!-- Footer Bar -->
 <template>
  <v-footer color="primary" dark class="text-center pa-4">
  <v-container>
     <v-row>
       <v-col cols="12" md="4">
         <h3 class="text-h6">EduAccess</h3>
         <p>Bridging the education gap with technology.</p>
       </v-col>
       <v-col cols="12" md="4">
         <h3 class="text-h6">Quick Links</h3>
         <v-btn text color="white" to="/about">About Us</v-btn>
         <v-btn text color="white" to="/contact">Contact</v-btn>
         <v-btn text color="white" to="/faq">FAQs</v-btn>
       </v-col>
       <v-col cols="12" md="4">
         <h3 class="text-h6">Follow Us</h3>
         <v-btn icon href="https://facebook.com" target="_blank"><v-icon>mdi-facebook</v-icon></v-btn>
         <v-btn icon href="https://twitter.com" target="_blank"><v-icon>mdi-twitter</v-icon></v-btn>
         <v-btn icon href="https://linkedin.com" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
       </v-col>
     </v-row>
     <v-divider class="my-4"></v-divider>
     <p>&copy; 2025 EduAccess. All rights reserved.</p>
   </v-container>
 </v-footer>
 </template>
