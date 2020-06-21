<template>
  <div class="wrapper">
    
    <div class="article-wrapper" v-if="data">
      <div v-for="post in filteredData" :key="post.uid" class="postLink">
          <router-link :to="'/' + post.type + '/' + post.uid">
                <prismic-image :field="post.data.featured_image"/>
                <!--<prismic-rich-text :field="post.data.title" />-->
                <h3 class="title">
                  {{ $prismic.richTextAsPlain(post.data.title) }}
                </h3>
                <prismic-rich-text :field="post.data.description" />
            </router-link>
        </div>
    </div>
    
    <div class="side-bar">
      <input placeholder="Filter Articles" type="text" v-model="articleFilter" class="unselectable" />
    </div>
    <button v-if="currentPage > 1" @click="previousPage">Previous Page</button>
    <button v-if="currentPage < totalPages" @click="nextPage">Next Page</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      data: '',
      currentPage: 1,
      totalPages: null,
      articleFilter: ''
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        '',
        { pageSize : 10, page : this.currentPage }
      )
        .then((document) => {
          if (document) {
            this.data = document.results
            console.log(this.data)
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    },
    nextPage () {
      this.currentPage ++
      this.getContent()
    },
    previousPage () {
      this.currentPage --
      this.getContent()
    }
  },
  computed: {
      filteredData:function() {
          // Set searched to equal input of the search field
          const searched = this.articleFilter.toLowerCase().trim()
          // Set searchResult to equal the result of filtering our data by country based on the input
          const searchResult = this.data.filter(c => c.data.title[0].text.toLowerCase().indexOf(searched) > -1)
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          // Run the sorting method on the filtered data and return the result
          return searchResult
      }
  },
  created () {
    this.getContent()
    this.$prismic.client.query(
        ''
      )
        .then((document) => {
          this.totalPages = Math.ceil(document.results.length / 10)
        })
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
input {
  display: block;
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
*.unselectable {
   -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;

   /*
     Introduced in Internet Explorer 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
   -ms-user-select: none;
   user-select: none;
}
</style>