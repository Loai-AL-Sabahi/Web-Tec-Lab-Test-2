<template>
    <div>
        <Navbar @search="filterPhotos" />
        <div style="display: flex; justify-content: center; margin-top: 20px;">
            <div>
                <h1 style="color: #ff7200;">List of Photos</h1>
                <div v-if="loading">Loading...</div>
                <div v-else>
                    <table border="1"
                        style="border-collapse: collapse; width: 100%; text-align: center; margin: 0 auto;">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Thumbnail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(photo, index) in filteredPhotos" :key="photo.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ photo.title }}</td>
                                <td><img :src="photo.thumbnailUrl" :alt="photo.title" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/AppNavbar.vue'
import axios from 'axios'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            photos: [],
            filteredPhotos: [],
            loading: true,
            searchQuery: ''
        }
    },
    async created() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
            this.photos = response.data.slice(0, 10)  // Get the first 10 photos
            this.filteredPhotos = this.photos  // Initialize filteredPhotos with all photos
        } catch (error) {
            console.error('Failed to fetch photos:', error)
        } finally {
            this.loading = false
        }
    },
    methods: {
        filterPhotos(query) {
            this.searchQuery = query.toLowerCase()
            this.filteredPhotos = this.photos.filter(photo =>
                photo.title.toLowerCase().includes(this.searchQuery)
            )
        }
    }
}
</script>

<style>
table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
}

th {
    background-color: #ff7200;
}

img {
    max-width: 100px;
}
</style>