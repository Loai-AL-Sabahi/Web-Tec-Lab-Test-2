<template>
    <div>
        <Navbar />
        <Content />
    </div>
</template>

<script>
import Navbar from '../components/AppNavbar.vue'
import Content from '../components/AppContent.vue'

export default {
    components: {
        Navbar,
        Content
    }
}
</script>