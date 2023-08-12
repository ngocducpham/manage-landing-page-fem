import { useCallback, useState } from "react";

export default function useDisclosure(
    initialState = false,
    callbacks?: { onOpen?(): void; onClose?(): void }
) {
    const { onOpen, onClose } = callbacks || {};
    const [opened, setOpened] = useState(initialState);

    const open = useCallback(() => {
        setOpened((isOpen) => {
            if (!isOpen) {
                onOpen?.();
                return true;
            }

            return isOpen;
        });
    }, [onOpen]);

    const close = useCallback(() => {
        setOpened((isOpen) => {
            if (isOpen) {
                onClose?.();
                return false;
            }

            return isOpen;
        });
    }, [onClose]);

    const toggle = useCallback(() => {
        opened ? close() : open();
    }, [close, open, opened]);

    return [ opened, { open, close, toggle } ] as const;
}
