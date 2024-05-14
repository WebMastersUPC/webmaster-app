<script>
import {DeliverableEntity} from "../../../shared/models/deliverable.model.js";
import DeliverableCard from "../components/deliverable-card.component.vue";
import ConfirmationDialog from "../components/confirmationDialog.component.vue";

export default {
  name: "review-deliverable",
  components:{ConfirmationDialog, DeliverableCard},
  data(){
    return {
      myDeliverable: null,
      showConfirmationDialog: false,
    }
  },
  created(){
    this.myDeliverable = new DeliverableEntity(
        'Este primer entregable es el resultado de un meticuloso proceso de análisis y documentación de los requisitos del software para la Plataforma de Comercio Electrónico Geekit. El Documento de Especificación de Requisitos del Software (SRS) proporciona una descripción detallada de las necesidades y expectativas del cliente, incluyendo los requisitos funcionales y no funcionales del sistema. Este documento servirá como la piedra angular para todo el proceso de desarrollo, proporcionando una guía clara y completa para el diseño, implementación y pruebas del software. Contiene casos de uso, diagramas de flujo, requisitos de usuario y sistema, así como cualquier otra información relevante para asegurar que el producto final cumpla con las expectativas del cliente y los usuarios finales. El SRS es un punto de referencia crucial para garantizar la alineación entre el equipo de desarrollo y los stakeholders del proyecto, estableciendo una base sólida para el éxito del proyecto.',
        new Date(),
        new Date(),
        'Pending',
        1,
        [
          'https://learn-us-east-1-prod-fleet02-xythos.content.blackboardcdn.com/5f0d0e6d23ee0/717936507?X-Blackboard-S3-Bucket=learn-us-east-1-prod-fleet01-xythos&X-Blackboard-Expiration=1714089600000&X-Blackboard-Signature=dx%2FVLikICwBA%2BqEDDNsieoHamd9Sbo5lKRcvqGoQpfA%3D&X-Blackboard-Client-Id=301940&X-Blackboard-S3-Region=us-east-1&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27upc-pre-202401-si730-final_project-statement-abet_v1.pdf&response-content-type=application%2Fpdf&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCIAtOwc1zNphyts3iiI7OAfddrUJC4DWXaftX5brM%2FJyKAiEApMLXhm8FRkZxccKwGCzfp04oIo7r1TRW5OB3j8uDJNgqvgUIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARADGgw2MzU1Njc5MjQxODMiDIRmTwLLcXMc6a0gfyqSBUMy7QfxPdILfB82sjtVTwRYqHPpk6F%2FEIv4Qid4UN6Inw6MPQfwDmqGYpAsx3QacqekIPZP1CQrkUwyr9OAol6Dgu%2BKw0BrpX3vUiBXpLQ01HnweBsZHDAKXn6IsYv5AzGsMx7o8Bw35GZuOyGbPBj9a2G61otziU2w%2BqOsrfzF5ci%2FIC%2B3NKzqlc1%2B3T%2B7sTtaJo2cxlzvnbIT3r%2BXcuN%2FQZ1H8cKY8D8LDF8%2Fi5QLt1%2FhiLsJ3vt5TgTIAsWHuXEsCboB1ugZQRjJJBKVIuoNTmItINYk0jdJHnDMHmQSSS20qhXzJvjpBarNctLBr3b4TQwNDgeWrJmw5CCGtL8OPAgG98l8zBuAeuN1oj%2FUIncD7d8BSbuBOXuVcmxSkhEM98w32FxbAZ0%2BsdjZPkeIb21AfXggjik6pOTF1MZbVkHHZnGNdgkJfP1jNLIxcHmXd03Lsl7fq40lWhtzhN436ecY%2FaVxKFScd0R4M8elsbphvr5TRbrXNC614P3ohUDUsSLIaL0YI%2FpmDTrx3KjZ1videWoaD%2Fjj%2FNESUTkRzM07Oo9mj3XLBb8gCOlHoUQqpFqKmyap4gG58uFGdd6rQ01oA9%2FLjJQ6%2FLlKskuEWUJ5F2TEX538O1lUV%2BCLH6wtkYlU0GtfRJEUlv3IlmPpczza%2FkFlZ%2FfjYt2UdRVHpiSPDT9zi50%2FA5fWJDP7wyosg%2ByPWMM7sCVO7mJMTd33DUfVO3AWo5uPawiQNd8UXo%2BEN1Qe8reqBxuo5%2BVk3SZX2NBYuxMBUN8l2qEELA02aZ%2F322C9ox1VkkuaeA159eU3DDmXXh2ybJJfbE39Ytt5cFSF5aijWq5ESZf%2B4pCBv2CR0vdXZY4zdd1Q3VfAtxYwvbOqsQY6sQGR%2FyVBrmf1g7ea1tsUvn2oQaqsDHetoo8VrSN3m%2FQ52IOJrSZup53Ne2igZjOUnkayWv%2FtloDdx%2BXj5iAXUcu6su4qAaSB3YKdKt%2BgqJulnskhaQtMY2IWC9Q8rm1DCBpaRvJBoB22WK2oP%2B6ggL6C%2FDc7VO9Jh0YjKxvmeX1fCcaOP5MTI23qrPajLhIUoozGGjM%2BqQWxQwOFYPi6kmT2wRjSESjjvsny9PmYOdo1Qbo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240425T180000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLYHXKIQQT%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d81ae1ec40445a9dc7d590121ae1941b67135a7cde4b44cf536ce057559e4a5a',
          'https://intranet.upc.edu.pe/Silabo/SilaboPDF/SI730_Aplicaciones_Web_202202.pdf',

        ]
    );
  }
}
</script>

<template>

  <div :class="{ blur: showConfirmationDialog }">
    <deliverable-card :deliverable="myDeliverable" @approve-delivery="showConfirmationDialog = true"></deliverable-card>
  </div>
  <div v-if="showConfirmationDialog" class="dialog-container">
    <confirmation-dialog @cancel="showConfirmationDialog = false"></confirmation-dialog>
  </div>

</template>

<style scoped>

.blur {
  filter: blur(2px);
}

.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: This adds a semi-transparent background */
}

</style>