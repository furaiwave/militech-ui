import './Select.css';
type SelectOption = {
    value: string;
    label: string;
};
type SelectProps = {
    options: SelectOption[];
    value?: string | string[];
    multiple?: boolean;
    placeholder?: string;
    label?: string;
    onChange?: (value: string | string[]) => void;
};
export declare const Select: ({ options, value, multiple, placeholder, label, onChange, }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map