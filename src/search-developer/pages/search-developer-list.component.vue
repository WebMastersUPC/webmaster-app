<script>
import DeveloperCardComponent from "../components/developer-card.component.vue";
import Paginator from "primevue/paginator";

export default{
  name: "search-developer-list",
  components: {
    'developer-card': DeveloperCardComponent,
    'pv-paginator': Paginator
  },
  data() {
    return {
      developers: [],
      first: 0,
      itemsPerPage: 5
    }
  },
  computed: {
    paginatedDevelopers() {
      return this.developers.slice(this.first, this.first + this.itemsPerPage);
    }
  },
  created(){
      this.developers = [
        {
          name: "Ana Rodríguez",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Ana es una desarrolladora Full Stack con más de 7 años de experiencia en la industria del software. Apasionada por la innovación y el desarrollo de soluciones tecnológicas, ha trabajado en una amplia gama de proyectos, desde aplicaciones móviles hasta sistemas empresariales. Sus habilidades incluyen el diseño de arquitecturas escalables, la implementación de interfaces de usuario intuitivas y la resolución de problemas complejos. Ana se destaca por su capacidad para colaborar efectivamente en equipos multidisciplinarios y su compromiso con la excelencia técnica."
        },
        {
          name: "Carlos López",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Carlos es un ingeniero de software con más de 8 años de experiencia en el desarrollo de aplicaciones móviles y web. Especializado en la creación de experiencias de usuario excepcionales, ha liderado proyectos de principio a fin, desde la concepción hasta la implementación. Con un enfoque en el desarrollo ágil y la entrega continua, Carlos se destaca por su capacidad para trabajar bajo presión y su compromiso con la calidad del código. Además de su experiencia técnica, también es un apasionado del aprendizaje continuo y la mejora profesional."
        },
        {
          name: "María García",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "María es una desarrolladora Frontend con una sólida experiencia en la creación de interfaces de usuario modernas y atractivas. Con más de 6 años de experiencia en el desarrollo web, ha trabajado en una variedad de proyectos, desde sitios web corporativos hasta aplicaciones de comercio electrónico. María se especializa en HTML, CSS y JavaScript, y tiene un profundo conocimiento de frameworks como React y Vue.js. Además de su experiencia técnica, se destaca por su creatividad y su enfoque en el diseño centrado en el usuario."
        },
        {
          name: "Javier Martínez",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Javier es un ingeniero de software con más de 10 años de experiencia en el desarrollo de aplicaciones empresariales. Especializado en tecnologías Java y Spring, ha liderado equipos de desarrollo en la entrega exitosa de proyectos complejos. Con un enfoque en la calidad del software y la mejora continua, Javier se destaca por su capacidad para diseñar arquitecturas escalables y seguras. Además de su experiencia técnica, también es un comunicador eficaz y un líder inspirador."
        },
        {
          name: "Laura Pérez",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Laura es una desarrolladora Backend con más de 9 años de experiencia en la creación de sistemas robustos y escalables. Especializada en tecnologías como Python, Django y MongoDB, ha trabajado en una variedad de proyectos, desde plataformas de comercio electrónico hasta sistemas de gestión de contenido. Laura se destaca por su capacidad para resolver problemas complejos y su atención al detalle en el diseño de soluciones técnicas. Además de su experiencia técnica, también es una líder colaborativa y una mentora apasionada."
        },
        {
          name: "Miguel Sánchez",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Miguel es un científico de datos con más de 8 años de experiencia en el análisis de datos y el desarrollo de modelos predictivos. Especializado en Python, TensorFlow y scikit-learn, ha trabajado en una variedad de proyectos, desde análisis de mercado hasta sistemas de recomendación. Miguel se destaca por su capacidad para traducir datos en información significativa y su pasión por encontrar soluciones innovadoras a problemas complejos. Además de su experiencia técnica, también es un comunicador efectivo y un colaborador comprometido."
        },
        {
          name: "Elena Ruiz",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Elena es una desarrolladora Full Stack con más de 6 años de experiencia en la creación de aplicaciones web escalables y robustas. Especializada en tecnologías como JavaScript, Node.js y MongoDB, ha trabajado en una variedad de proyectos, desde aplicaciones de redes sociales hasta sistemas de gestión de contenido. Elena se destaca por su capacidad para colaborar efectivamente en equipos multidisciplinarios y su enfoque en la entrega de soluciones de alta calidad. Además de su experiencia técnica, también es una líder inspiradora y una defensora del desarrollo profesional continuo."
        },
        {
          name: "Juan Gómez",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Juan es un ingeniero de software con más de 7 años de experiencia en el desarrollo de sistemas distribuidos y escalables. Especializado en tecnologías como C++, Python y Docker, ha liderado equipos en la entrega exitosa de proyectos críticos para el negocio. Juan se destaca por su capacidad para diseñar arquitecturas eficientes y su enfoque en la entrega de soluciones innovadoras. Además de su experiencia técnica, también es un mentor apasionado y un defensor de las mejores prácticas de ingeniería de software."
        },
        {
          name: "Sofía Díaz",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Sofía es una desarrolladora Frontend con más de 5 años de experiencia en la creación de interfaces de usuario atractivas y funcionales. Especializada en tecnologías como React, Vue.js y Sass, ha trabajado en una variedad de proyectos, desde aplicaciones de comercio electrónico hasta aplicaciones de viaje. Sofía se destaca por su capacidad para traducir diseños complejos en experiencias de usuario intuitivas y su enfoque en la optimización del rendimiento y la accesibilidad. Además de su experiencia técnica, también es una colaboradora comprometida y una defensora del diseño centrado en el usuario."
        },
        {
          name: "Pedro Fernández",
          profileImage: "https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg",
          description: "Pedro es un desarrollador móvil con más de 6 años de experiencia en la creación de aplicaciones multiplataforma. Especializado en tecnologías como Xamarin, Flutter y Firebase, ha desarrollado aplicaciones para una variedad de industrias, desde la salud hasta la educación. Pedro se destaca por su capacidad para diseñar interfaces intuitivas y su enfoque en la entrega de experiencias de usuario de alta calidad. Además de su experiencia técnica, también es un solucionador de problemas creativo y un colaborador comprometido."
        }
      ]
  },
  methods: {
    onPageChange(event) {
      this.first = event.first;
      this.itemsPerPage = event.rows;
    }
  }
}
</script>

<template>
  <div class="grid col-fixed justify-content-center gap-5 mt-8 mb-4">
    <developer-card v-for="developer in paginatedDevelopers"
                    :key="developer.name"
                    :developer="developer"></developer-card>
  </div>
  <pv-paginator :first="first" :rows="itemsPerPage" :totalRecords="developers.length"
             :rowsPerPageOptions="[5,10,20]" @page="onPageChange"></pv-paginator>
</template>

<style scoped>

</style>