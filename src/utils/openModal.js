import Works from "@/components/Works";

export default function showModal(itemInfo) {
    this.$modal.show(
        {
            template: `
              <div name="modal" class="Modal Modal--bg" @close="$emit('close')">
              <div class="Modal-Menu">
                <button type="button" class="Modal-Close Btn" @click="$emit('close')">
                  <span></span>
                  <span></span>
                </button>
              </div>
              </div>
            `,
            props: ['itemInfo'],
            components: {Works},
        },
        {itemInfo},
        {
            width: this.width > 410 ? 400 : 320,
            height: 'auto',
            adaptive: true,
            scrollable: true,
        },
        {},
    )
}