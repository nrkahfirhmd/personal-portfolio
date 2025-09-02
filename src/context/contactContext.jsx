import { createContext, useContext, useState } from "react";

const ContactContext = createContext()

export function ContactProvider({ children }) {
    const [viewContact, setViewContact] = useState(false);

    return (
        <ContactContext.Provider value={{ viewContact, setViewContact }}>
            {children}
        </ContactContext.Provider>
    )
}

export function useContact() {
    return useContext(ContactContext);
}