import { useState } from 'react';
import ConsultationDialog from "./ConsultationDialog";
import ConsultationDialogContext from "./context";

const ConsultationDialogProvider = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    }

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    }

    return (
        <ConsultationDialogContext.Provider
            value={{
                open: isDialogOpen,
                onClose: handleDialogClose,
                onOpen: handleDialogOpen,
            }}
        >
            {children}

            <ConsultationDialog
                open={isDialogOpen}
                setModalActive={setIsDialogOpen}
            />
        </ConsultationDialogContext.Provider>
    );
};

export default ConsultationDialogProvider;
