<template>
    <div v-if="data">
        <h3>Related Articles</h3>
        <ul>
            <li v-for="(article, index) in data" :key="index">
            <router-link v-if="(id != article.id)" :to="'/' + article.type + '/' + article.uid" class="side-link">{{ $prismic.richTextAsPlain(article.data.title) }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ArticleList',
    props: ['tag', 'id'],
    data () {
        return {
        data: []
        }
    },
    methods: {
        getContent () {
        this.$prismic.client.query(
            this.$prismic.Predicates.at('document.tags', [this.tag]),
            { orderings : '[my.blog_post.date desc]' }
        )
            .then((document) => {
            if (document) {
                this.data = document.results
                console.log(this.data)
            } else {
                this.$router.push({ name: 'not-found' })
            }
            })
        }
    },
    created() {
        this.getContent()
        
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0; 
}
li {
    display: block;
    width: 100%;
}
li:hover {
    background-color:rgb(221, 219, 219);
}
.side-link {
    display: block;
    width: 100%;
}
</style>