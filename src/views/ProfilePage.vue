<template>
    <div>
        <Navbar />
        <div style="display: flex; justify-content: center; margin-top: 20px;">
            <div style="width: 50%;">
                <h1 style="color: #ff7200;">Profile</h1>
                <form @submit.prevent="saveProfile">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td><label for="name">Name:</label></td>
                                <td style="padding: 8px;"><input id="name" v-model="localProfile.name" type="text"
                                        style="width: 100%;" /></td>
                            </tr>
                            <tr>
                                <td><label for="courseYear">Course Year:</label></td>
                                <td style="padding: 8px;"><input id="courseYear" v-model="localProfile.courseYear"
                                        type="text" style="width: 100%;" /></td>
                            </tr>
                            <tr>
                                <td><label for="matricNumber">Matric Number:</label></td>
                                <td style="padding: 8px;"><input id="matricNumber" v-model="localProfile.matricNumber"
                                        type="text" style="width: 100%;" /></td>
                            </tr>
                            <tr>
                                <td><label for="address">Address:</label></td>
                                <td style="padding: 8px;"><input id="address" v-model="localProfile.address" type="text"
                                        style="width: 100%;" /></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 8px; text-align: center;">
                                    <button type="submit">Save</button>
                                    <button type="button" @click="resetProfile">Reset</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/AppNavbar.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            localProfile: {}
        }
    },
    computed: {
        ...mapState({
            profile: state => state.profile
        })
    },
    methods: {
        ...mapActions(['updateProfile']),
        saveProfile() {
            this.updateProfile(this.localProfile)
            alert('Changes have been saved. Please check the About page.')
        },
        resetProfile() {
            this.localProfile = { ...this.profile }
        }
    },
    created() {
        this.localProfile = { ...this.profile }
    }
}
</script>

<style>
td {
    padding: 8px;
    text-align: left;
    color: white;
}

table {
    border: 1px solid #ddd;
    margin-top: 20px;
}

label {
    font-weight: bold;
}

input {
    border: 1px solid #ccc;
    padding: 8px;
}

button {
    padding: 10px 20px;
    background-color: orange;
    color: white;
    border: none;
    cursor: pointer;
    margin: 5px;
}

button:hover {
    background-color: coral;
}
</style>