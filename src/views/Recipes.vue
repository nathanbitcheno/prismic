<template>
  <div class="wrapper">
    
    <div class="article-wrapper">
        <div v-for="post in data" :key="post.uid" class="postLink">
            <router-link :to="'/' + post.type + '/' + post.uid">
                <prismic-image :field="post.data.featured_image"/>
                <!--prismic-rich-text :field="post.data.title" />-->
                <h3 class="title">
                  {{ $prismic.richTextAsPlain(post.data.title) }}
                </h3>
                <prismic-rich-text :field="post.data.description" />
            </router-link>
        </div>
    </div>
    <div class="side-bar">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipes',
  data () {
    return {
      data: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.tags', ['recipe']),
        { orderings : '[my.blog_post.date desc]' }
      )
        .then((document) => {
          if (document) {
            this.data = document.results
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style>
.description {
  margin-top: 40px;
}

.description h2 {
  font-size: 24px;
}

.description h2:not(:first-child) {
  margin-top: 20px;
}

.description p {
  line-height: 1.5;
}

.description p:not(:first-child) {
  margin-top: 10px;
}

.description a {
  color: #404e9f;
}

.description a:hover {
  text-decoration: underline;
}

.cta-wrapper {
  margin-top: 40px;
}

.cta {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  background-color: #404e9f;
  color: white;
}

.icon-wrapper {
  margin-top: 40px;
}

.icon {
  max-width: 100%;
}

.block-img img {
    width: 100%;
}

.code,
pre {
    background-color: #f7f7f7;
    border: 1px solid #cdcdcd;
    border-radius: .125rem;
    color: #111;
    display: block;
    margin-bottom: 1.5rem;
    margin-top: 0;
    overflow: auto;
    padding: calc(0.45rem - 1px) 1rem calc(0.45rem - 1px);
    text-align: left;
    text-shadow: none;
    white-space: pre;
}
ol {
    margin-left: 25px;
}
pre,
.terminal {
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    font-size: 0.9em;
}
.terminal ol{
    font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
    margin-left: 30px;
}
</style>