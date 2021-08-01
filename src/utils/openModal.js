import Modal from "@/components/Modal";

const width = window.innerWidth;

export function showAuthDialog() {
    this.$modal.show(
        Modal,
        {},
        {
            width: width > 1300 ? 1280 : 320,
            height: 'auto',
            adaptive: true,
            scrollable: true,
            style: "{ backgroundColor: 'rgba(1,7,11,.7)'}",
            clickToClose: false,
        },
        {},
    );
}