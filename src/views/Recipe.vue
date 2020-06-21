<!-- Create file src/views/Page.vue -->

<template>
  <div class="wrapper">
    <prismic-edit-button :documentId="documentId"/>
    <h1 class="title">
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h1>
    <prismic-rich-text :field="fields.body" class="description"/>
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.slice_type === 'content'">
        <prismic-rich-text :field="slice.primary.rich_text"/>
      </template>
      <template v-else-if="slice.slice_type === 'image'">
        <prismic-rich-text :field="slice.primary.title"/>
        <template v-for="(item, index) in slice.items">
          <prismic-image :field="item.image" :key="'photo-item-' + index"/>
        </template>
      </template>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Recipe',
  data () {
    return {
      documentId: '',
      fields: {
        title: null,
        body: null,
        image: null
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('recipe', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.slices = document.data.body;
            console.log(this.slices)
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

<style>

</style>