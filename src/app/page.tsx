import Card from "@/components/Card";
import DateAndTime from "@/components/DateAndTime";
import Table from "@/components/Table";

export default function Home() {
    return (
        <div className="flex flex-col py-10 p-5 md:p-10">
            <div className="flex justify-between items-center">

                {/* Heading */}
                <h1 className="text-xl md:text-3xl font-bold text-black/80">Employees Activity Dashboard</h1>

                {/* Date and Time */}
                <DateAndTime />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4 items-center md:items-start">

                {/* Employees activity table */}
                <Table />

                {/* Employee of the month */}
                <Card employee_name="Cornie Dennick" designation="Electrician" title="Employee of the Month" image_url="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" />
            </div>
        </div>
    );
}
