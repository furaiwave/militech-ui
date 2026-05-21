import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'terminal';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonBaseProps = {
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
type ButtonProps = (ButtonBaseProps & {
    variant?: Exclude<ButtonVariant, 'danger'>;
    confirmLabel?: never;
}) | (ButtonBaseProps & {
    variant: 'danger';
    confirmLabel: string;
});
declare const Button: ({ variant, size, loading, disabled, children, onClick, className, }: ButtonProps) => react_jsx_runtime.JSX.Element;

type CardStatus = 'active' | 'offline' | 'alert' | 'classified';
type CardVariant = 'dark' | 'light';
type ObjectDetail = {
    title: string;
    description: string[];
    items?: {
        label: string;
    }[];
};
type ProgressItem = {
    label: string;
    value: number;
    max: number;
    detail?: ObjectDetail;
};
type CardProps = {
    title: string;
    status?: CardStatus;
    subtitle?: string;
    children?: React.ReactNode;
    className?: string;
    scanline?: boolean;
    progress?: ProgressItem[];
    footerBtn?: string;
    onFooterBtn?: () => void;
    meta?: string;
    variant?: CardVariant;
};
declare const Card: ({ title, status, subtitle, children, className, scanline, progress, footerBtn, onFooterBtn, meta, variant, }: CardProps) => react_jsx_runtime.JSX.Element;

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
declare const Select: ({ options, value, multiple, placeholder, label, onChange, }: SelectProps) => react_jsx_runtime.JSX.Element;

type BadgeVariant = 'active' | 'offline' | 'threat' | 'classified' | 'warning' | 'neutral';
type BadgeProps = {
    variant?: BadgeVariant;
    children: React.ReactNode;
    pulse?: boolean;
    className?: string;
};
declare const Badge: ({ variant, children, pulse, className, }: BadgeProps) => react_jsx_runtime.JSX.Element;

type DataPoint = Record<string, string | number>;
type AreaSeries = {
    key: string;
    label?: string;
    color?: string;
};
type AreaChartProps = {
    data: DataPoint[];
    series: AreaSeries[];
    xKey?: string;
    height: number;
    color?: string;
    label?: string;
    animated?: boolean;
    showLegend?: boolean;
};
declare const AreaChart: ({ data, series, xKey, height, label, animated, showLegend, }: AreaChartProps) => react_jsx_runtime.JSX.Element;

type Column<TRow extends Record<string, unknown>> = {
    key: keyof TRow & string;
    label: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    editable?: boolean;
    render?: (value: TRow[keyof TRow], row: TRow) => React.ReactNode;
};
type TableProps<TRow extends Record<string, unknown>> = {
    columns: Column<TRow>[];
    data: TRow[];
    label?: string;
    sortable?: boolean;
    onRowClick?: (row: TRow) => void;
    onDataChange?: (data: TRow[]) => void;
};
declare const Table: <TRow extends Record<string, unknown>>({ columns, data: initialData, label, sortable, onRowClick, onDataChange, }: TableProps<TRow>) => react_jsx_runtime.JSX.Element;

type InputVariant = 'default' | 'danger' | 'success';
type InputSize = 'sm' | 'md' | 'lg';
type InputProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    variant?: InputVariant;
    size?: InputSize;
    disabled?: boolean;
    readOnly?: boolean;
    prefix?: string;
    suffix?: string;
    hint?: string;
    error?: string;
    onChange?: (value: string) => void;
    onEnter?: (value: string) => void;
    className?: string;
};
declare const Input: ({ label, placeholder, value, defaultValue, variant, size, disabled, readOnly, prefix, suffix, hint, error, onChange, onEnter, className, }: InputProps) => react_jsx_runtime.JSX.Element;

type BannerProps = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    description?: string;
    primaryAction?: {
        label: string;
        onClick?: () => void;
    };
    secondaryAction?: {
        label: string;
        onClick?: () => void;
    };
    backgroundImage?: string;
    overlay?: boolean;
    className?: string;
};
declare const Banner: ({ eyebrow, title, subtitle, description, primaryAction, secondaryAction, backgroundImage, overlay, className, }: BannerProps) => react_jsx_runtime.JSX.Element;

type DialogVatiant = 'default' | 'danger' | 'classified';
type DialogProps = {
    open: boolean;
    variant?: DialogVatiant;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    primaryAction?: {
        label: string;
        onClick?: () => void;
    };
    secondaryAction?: {
        label: string;
        onClick?: () => void;
    };
    onClose?: () => void;
    closeOnOverlay?: boolean;
    className?: string;
};
declare const Dialog: ({ open, variant, title, subtitle, children, primaryAction, secondaryAction, onClose, closeOnOverlay, className, }: DialogProps) => react_jsx_runtime.JSX.Element | null;

type AccordionItem = {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
};
type AccordionProps = {
    items: AccordionItem[];
    multiple?: boolean;
    defaultOpen?: string[];
    className?: string;
};
declare const Accordion: ({ items, multiple, defaultOpen, className, }: AccordionProps) => react_jsx_runtime.JSX.Element;

type AvatarStatus = 'online' | 'offline' | 'threat' | 'classified';
type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type AvatarProps = {
    src?: string;
    name?: string;
    status?: AvatarStatus;
    size?: AvatarSize;
    hud?: boolean;
    className?: string;
};
declare const Avatar: ({ src, name, status, size, hud, className, }: AvatarProps) => react_jsx_runtime.JSX.Element;
type AvatarGroupProps = {
    avatars: AvatarProps[];
    max?: number;
    size?: AvatarSize;
};
declare const AvatarGroup: ({ avatars, max, size, }: AvatarGroupProps) => react_jsx_runtime.JSX.Element;

type CalendarEvent = {
    date: string;
    label: string;
    variant?: 'default' | 'threat' | 'classified' | 'success';
};
type CalendarMode = 'single' | 'range';
type CalendarProps = {
    mode?: CalendarMode;
    events?: CalendarEvent[];
    onSelect?: (date: string | [string, string]) => void;
    className?: string;
};
declare const Calendar: ({ mode, events, onSelect, className, }: CalendarProps) => react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    label: string;
    href?: string;
    onClick?: () => void;
};
type BreadcrumbProps = {
    items: BreadcrumbItem[];
    separator?: string;
    className?: string;
};
declare const Breadcrumb: ({ items, separator, className, }: BreadcrumbProps) => react_jsx_runtime.JSX.Element;

type TabItem = {
    id: string;
    label: string;
    badge?: string | number;
    disabled?: boolean;
    children: React.ReactNode;
};
type TabsVariant = 'default' | 'underline' | 'filled';
type TabsProps = {
    items: TabItem[];
    variant?: TabsVariant;
    defaultTab?: string;
    onChange?: (id: string) => void;
    className?: string;
};
declare const Tabs: ({ items, variant, defaultTab, onChange, className, }: TabsProps) => react_jsx_runtime.JSX.Element;

type SwitchSize = 'sm' | 'md' | 'lg';
type SwitchVariant = 'default' | 'danger' | 'success';
type SwitchProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: SwitchSize;
    variant?: SwitchVariant;
    label?: string;
    hint?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
};
declare const Switch: ({ checked, defaultChecked, disabled, size, variant, label, hint, onChange, className, }: SwitchProps) => react_jsx_runtime.JSX.Element;

type SkeletonVariant = 'text' | 'rect' | 'circle' | 'card';
type SkeletonProps = {
    variant?: SkeletonVariant;
    width?: string | number;
    height?: string | number;
    lines?: number;
    className?: string;
    animate?: boolean;
};
declare const Skeleton: ({ variant, width, height, lines, className, animate, }: SkeletonProps) => react_jsx_runtime.JSX.Element;

type ProgressBarVariant = 'default' | 'danger' | 'success' | 'warning';
type ProgressBarSize = 'sm' | 'md' | 'lg';
type ProgressBarProps = {
    value: number;
    max?: number;
    variant?: ProgressBarVariant;
    size?: ProgressBarSize;
    label?: string;
    showValue?: boolean;
    animated?: boolean;
    striped?: boolean;
    className?: string;
};
declare const ProgressBar: ({ value, max, variant, size, label, showValue, animated, striped, className, }: ProgressBarProps) => react_jsx_runtime.JSX.Element;

declare const MilitechToaster: () => react_jsx_runtime.JSX.Element;
declare const toast: {
    default: (title: string, description?: string) => string | number;
    success: (title: string, description?: string) => string | number;
    error: (title: string, description?: string) => string | number;
    warning: (title: string, description?: string) => string | number;
    info: (title: string, description?: string) => string | number;
    classified: (title: string, description?: string) => string | number;
};

type SpinnerVariant = 'default' | 'danger' | 'success' | 'warning';
type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
type SpinnerType = 'ring' | 'radar' | 'bars' | 'dots';
type SpinnerProps = {
    variant?: SpinnerVariant;
    size?: SpinnerSize;
    type?: SpinnerType;
    label?: string;
    className?: string;
};
declare const Spinner: ({ variant, size, type, label, className, }: SpinnerProps) => react_jsx_runtime.JSX.Element;

type StepStatus = 'completed' | 'active' | 'pending' | 'error';
type Step = {
    id: string;
    label: string;
    subtitle?: string;
    status?: StepStatus;
};
type StepperOrientation = 'horizontal' | 'vertical';
type StepperProps = {
    steps: Step[];
    current?: number;
    orientation?: StepperOrientation;
    className?: string;
};
declare const Stepper: ({ steps, current, orientation, className, }: StepperProps) => react_jsx_runtime.JSX.Element;

type AppBarItem = {
    id: string;
    icon?: React.ReactNode;
    value: string | number;
    onClick?: () => void;
    variant?: 'accent' | 'brown' | 'default';
};
type AppBarProps = {
    items: AppBarItem[];
    className?: string;
};
/**
 *
 * @band Bullet For My Valentine
 * @album The Poison
 * @song Tears Don't Fall
 */
declare const AppBar: ({ items, className, }: AppBarProps) => react_jsx_runtime.JSX.Element;

type TextareaVariant = 'default' | 'danger' | 'success';
type TextareaProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    variant?: TextareaVariant;
    disabled?: boolean;
    readOnly?: boolean;
    rows?: number;
    maxLength?: number;
    hint?: string;
    error?: string;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    onChange?: (value: string) => void;
    className?: string;
};
declare const Textarea: ({ label, placeholder, value, defaultValue, variant, disabled, readOnly, rows, maxLength, hint, error, resize, onChange, className, }: TextareaProps) => react_jsx_runtime.JSX.Element;

export { Accordion, AppBar, AreaChart, Avatar, AvatarGroup, Badge, Banner, Breadcrumb, Button, Calendar, Card, Dialog, Input, MilitechToaster, ProgressBar, Select, Skeleton, Spinner, Stepper, Switch, Table, Tabs, Textarea, toast };
