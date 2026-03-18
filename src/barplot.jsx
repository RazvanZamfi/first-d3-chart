import * as d3 from "d3";
const width = 700;
const height = 1000;
const margin = {top: 20, right: 30, bottom: 20, left: 130};
const innerWidth = width -margin.left - margin.right;
const innerHeight = height - margin.bottom - margin.top;

const Barplot = ({data}) => {
    const yScale = d3.scaleBand().domain(data.map(d => d.country)).range([0,innerHeight]).padding(0.2);
    const xScale = d3.scaleLinear().domain([0, d3.max(data, d => d.students)]).range([0, innerWidth]);
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {data.map((d, i) => (
                    <g key={i}>
                    <rect className="bar" x={0} y={yScale(d.country)} width={xScale(d.students)} height={yScale.bandwidth()} rx={4}/>
                    <text className="bar-label" x={-8} y={yScale(d.country) + yScale.bandwidth() / 2} textAnchor="end" dominantBaseline="middle">{d.country}</text>
                    <text className="bar-value" x={xScale(d.students)+8} y={yScale(d.country) + yScale.bandwidth() / 2} textAnchor="start" dominantBaseline="middle">{d.students}</text>
                    </g>
                ))}

            </g>
        </svg>
    )
}
export default Barplot;