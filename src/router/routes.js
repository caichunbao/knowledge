import HelloWorld from '@/components/HelloWorld.vue'
import KnowledgePoint from '@/components/KnowledgePoint.vue'


const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/knowledgepoint',
  name: 'knowledgepoint',
  component: KnowledgePoint
}]

export default routes;