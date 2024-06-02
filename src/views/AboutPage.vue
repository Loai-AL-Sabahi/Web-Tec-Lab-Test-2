<template>
    <div>
        <Navbar />
        <div style="display: flex; justify-content: center; margin-top: 20px;">
            <div style="width: 50%;">
                <h1 class="content">About</h1>
                <table style="width: 100%; border-collapse: collapse;">
                    <tbody>
                        <tr>
                            <td><strong>Name:</strong></td>
                            <td class="content">{{ profile.name }}</td>
                        </tr>
                        <tr>
                            <td><strong>Course Year:</strong></td>
                            <td class="content">{{ profile.courseYear }}</td>
                        </tr>
                        <tr>
                            <td><strong>Matric Number:</strong></td>
                            <td class="content">{{ profile.matricNumber }}</td>
                        </tr>
                        <tr>
                            <td><strong>Address:</strong></td>
                            <td class="content">{{ profile.address }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/AppNavbar.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState({
            profile: state => state.profile
        })
    }
}
</script>

<style scoped>
td {
    padding: 8px;
    text-align: left;
    color: white
}

table {
    border: 1px solid #ddd;
    margin-top: 20px;
}

strong {
    font-weight: bold;
}

.content {
    color: #ff7200;
    font-size: 26px;
}
</style>