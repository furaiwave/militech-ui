import './AreaChart.css';
type DataPoint = Record<string, string | number>;
type AreaChartProps = {
    data: DataPoint[];
    dataKey: string;
    xKey?: string;
    height: number;
    color?: string;
    label?: string;
    animated?: boolean;
};
export declare const AreaChart: ({ data, dataKey, xKey, height, color, label, animated, }: AreaChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AreaChart.d.ts.map