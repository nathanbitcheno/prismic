<template>
  <div class="wrapper">
    <prismic-edit-button :documentId="documentId"/>
    
    <div class="article-wrapper">
      <prismic-rich-text :field="fields.title"/>
      <section v-for="(slice, index) in slices" :key="'slice-' + index">
        <template v-if="slice.slice_type === 'text'">
          <prismic-rich-text :field="slice.primary.text"/>
        </template>
        <template v-if="slice.slice_type === 'sub_title'">
          <prismic-rich-text :field="slice.primary.sub_title"/>
        </template>
        <div v-if="slice.slice_type === 'code'" >
          <prismic-rich-text :field="slice.primary.code" class="code" />
        </div>
        <div v-if="slice.slice_type === 'terminal'" >
          <prismic-rich-text :field="slice.primary.terminal_list" class="terminal" />
        </div>
        <template v-else-if="slice.slice_type === 'image'">
          <prismic-image :field="slice.primary.image" class="inline-image" />
        </template>
      </section>
    </div>
    <div class="side-bar">
      <ArticleList v-if="fields.tag" :tag="fields.tag" :id="documentId" />
    </div>
  </div>
  
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'Game',
  components: {
    ArticleList
  },
  data () {
    return {
      documentId: '',
      fields: {
        title: null,
        tag: ''
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('game', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.fields.tag = document.tags[0]
            this.slices = document.data.body
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style scoped>

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