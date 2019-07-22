<template>
  <div class="custom-pages">
    <div class="main-div">
      <div
        v-if="listPosts.length === 0"
        class="no-posts"
        key="no-posts"
      >
        {{ $themeConfig.lang.noRelatedPosts }}
      </div>

      <div
        v-else
        class="posts-items"
        :key="page"
      >
        <light-timeline :items="pagePosts">
          <template
            slot="tag"
            slot-scope="{ item }"
          >
            {{ item.lastUpdated }}
          </template>

          <template
            slot="content"
            slot-scope="{ item }"
          >
            <RouterLink
              :to="item.path"
              class="post-link"
            >
              {{ item.title }}
            </RouterLink>
          </template>
        </light-timeline>
      </div>
      <div
        v-if="total > 1"
        class="posts-paginator"
      >
        <Pagination
          v-model="page"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import PostMeta from '../components/PostMeta.vue'
import Pagination from '../components/Pagination.vue'
// import hzqingVueTimeline from 'hzqing-vue-timeline'

// import CustTimeline from '../../docs/.vuepress/components/Timeline'
// import PostsList from '../components/PostsList.vue'
// import PostsListItem from '../components/PostsListItem.vue'
// import TimeA from '../components/timeA'
// import TimeB from '../components/timeB'
export default {
  name: 'Timelinelayout',
  components: {
    // TimeB,
    // TimeA,
    // PostMeta,
    // PostsList,
    Pagination,
    // PostsListItem,
  },
  data () {
    return {
      posts: null,
      page: 1,
    }
  },
  // props: {
  //   posts: {
  //     type: Array,
  //     required: false,
  //     default: null,
  //   },
  // },
  created () {
    this.posts = this.$posts

    console.log(this.posts)
  },
  computed: {
    perPage () {
      return this.$themeConfig.pagination.perPage || 8
    },

    total () {
      return Math.ceil(this.listPosts.length / this.perPage)
    },

    listPosts () {
      return this.posts || this.$posts
    },

    pagePosts () {
      const begin = (this.page - 1) * this.perPage
      const end = begin + this.perPage
      return this.listPosts.slice(begin, end)
    },
  },
  listPosts () {
    this.page = 1
  },
}
</script>

<style scoped>

  /*                 .create-date*/
  /*                 float left*/
  /*                 .update-date*/
  /*                 float right*/
</style>
