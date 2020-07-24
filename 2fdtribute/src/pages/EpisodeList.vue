<template>
  <div>
    <ul>
      <li v-for="edge in $page.rss.edges" :key="edge.id">
        <a :href="edge.node.link | local-link">{{edge.node.title}}</a>
      </li>
    </ul>
  </div>
</template>

<page-query>
query {
    rss: allRssFeed {
        edges {
        node {
            id
            title
            content_encoded
            link
            pubDate
            enclosure {
            url
            length
            type
            }
        }
        }
    }
}
</page-query>

<script>
export default {};
</script>

<style>
</style>