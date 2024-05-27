import Card from "@/components/Card";
import DateAndTime from "@/components/DateAndTime";
import Table from "@/components/Table";
import Image from "next/image";
import logo from "@/assets/Logo.png";

// Importing employees data from JSON file
import employees from "@/assets/employees-data.json";

export default function Home() {
    return (
        <div className="flex flex-col py-10 p-5 md:p-10">
            <div className="flex justify-between items-center">

                {/* Heading */}
                <h1 className="text-xl md:text-3xl font-bold text-black/80 flex gap-2 justify-center items-center"><Image src={logo} width={60} height={60} alt="logo" />  Employees Activity Dashboard</h1>

                {/* Date and Time */}
                <DateAndTime />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mt-4 items-center lg:items-start">

                {/* Employees activity table */}
                <Table />

                {/* Employee of the month */}
                <Card employee_name={employees[0]?.name} designation={employees[0]?.designation} title="Employee of the month" image_url={employees[0]?.profile_image} />
            </div>
        </div>
    );
}
