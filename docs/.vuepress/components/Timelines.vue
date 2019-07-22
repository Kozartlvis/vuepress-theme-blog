<template>
  <div class="custom-pages">
    <div class="main-div">
      <h2>Table of Contents</h2>

      <TOC />
    </div>

    <div class="main-div">
      <!--      <RouterLink-->
      <!--        :to="post.path"-->
      <!--        class="post-link"-->
      <!--      >-->
      <!--        <h3 class="post-title">-->
      <!--          {{ post.title }}-->
      <!--        </h3>-->
      <!--      </RouterLink>-->
      <span
        v-if="$page.createdAt"
      >
        <!--        <IconInfo-->
        <!--          type="date"-->
        <!--          :title="post.createdAt"-->
        <!--        >-->
        ${$page.updatedAt}
        <!--        </IconInfo>-->
      </span>
      <!--      <Content class="content" />-->
      <!--      <hzqing-vue-timeline-->
      <!--        timeline-color="#5bbcd5"-->
      <!--        time-content-color="#fff"-->
      <!--        :data-list="data"-->
      <!--      />-->
    </div>
  </div>
</template>

<script>
// import hzqingVueTimeline from 'hzqing-vue-timeline'
export default {
  name: 'Timelines',
  // components: {
  //   hzqingVueTimeline,
  // },
  // created () {
  //   this.posts = this.$posts
  // time = this.$page.createdAt
  // <span
  //   v-if="post.createdAt"
  //     class="post-info-item"
  //     >
  //     <IconInfo
  //   type="date"
  // :title="post.createdAt"
  //     >
  //     {{ post.createdAt }}
  // </IconInfo>
  //   </span>
  //   console.log(post.createdAt)
  // data:[
  //   {
  //     time: time,
  //     img: 'static/touxiang.jpeg',
  //     title: 'hzqing.com',
  //     content: '这是衡钊清的个人博客',
  //   },
  //     {
  //       time: '2018-03-30 14:36:35',
  //       img: 'static/one.jpeg',
  //       title: '这是一个简单的vue时间轴插件',
  //       content: '这是一个简单的vue时间轴插件，使用非常的方便',
  //     },
  //     {
  //       time: 1522372393000,
  //       img: 'static/three.jpg',
  //       title: '努力奋斗',
  //       content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~',
  //     },
  //     {
  //       time: 1522372393000,
  //       img: '4',
  //       title: '努力奋斗',
  //       content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~',
  //     },
  //     {
  //       time: 1522372393000,
  //       img: '',
  //       title: '努力奋斗',
  //       content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~',
  //     },
  //   ],
  // },
  // data: function () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //     data: [
  //       {
  //         time: '2018-03-30 14:36:35',
  //         img: 'static/one.jpeg',
  //         title: '这是一个简单的vue时间轴插件',
  //         content: '这是一个简单的vue时间轴插件，使用非常的方便',
  //       },
  //     ],
  //   }
  // },
  // props: {
  //   post: {
  //     type: Object,
  //     required: true,
  //   },
  // },
}
</script>

<style scoped>

</style>
