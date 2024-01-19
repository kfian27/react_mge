import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import allConstant from "../../app/utils/constant";
import * as BIcon from "react-bootstrap-icons";
import styled from "styled-components";
import MasterList from "../../app/master_components/master_list";

const List = () => {
  const StyledCell = styled.div``;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const getJenisIcon = (value) => {
    if (value === 1) {
      return <BIcon.Check2 />;
    } else {
      return <BIcon.X />;
    }
  };

  const columns = [
    {
      name: "Aksi",
      isAction: true,
    },
    {
      name: "Kode Perusahaan",
      selector: (row) => row.kode,
      sortable: true,
      sortField: "kode",
    },
    {
      name: "Nama",
      selector: (row) => row.nama_perusahaan,
      sortable: true,
      sortField: "nama_perusahaan",
    },
    {
      name: "Alamat",
      selector: (row) => row.alamat,
      sortable: true,
      sortField: "alamat",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      sortField: "email",
    },
    {
      name: "PIC",
      selector: (row) => row.nama,
      sortable: true,
      sortField: "nama",
    },
    {
      name: "telp",
      selector: (row) => row.telp,
      sortable: true,
      sortField: "telp",
    },
    {
      name: "aktif",
      cell: (row) => (
        <StyledCell className="status_jenis">
          {getJenisIcon(row.jenis)}
        </StyledCell>
      ),
      sortable: true,
      sortField: "jenis",
    },
  ];

  const configFilter = [
    {
      title: "Nama",
      fieldType: "text",
      fieldName: "nama",
    },
    {
      title: "Nomor",
      fieldType: "numeric",
      fieldName: "id",
    },
    {
      title: "Date",
      fieldType: "date",
      fieldName: "date",
      value: [startDate, endDate],
      callback: [setStartDate, setEndDate],
    },

    {
      title: "Select",
      fieldType: "select",
      fieldName: "select",
      defaultValue: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ],
    },
  ];

  const configTable = {
    columns: columns,
    urlList: `${allConstant.apiUrl}/master/company`,
    urlDelete: `${allConstant.apiUrl}/master/company`,
    sortBy: "created_at",
    sortType: "DESC",
    canFilter: "1",
    configFilter: configFilter,
  };

  return (
    <div>
      <div>
        <h1>List Company</h1>
      </div>
      <MasterList.MasterList configTable={configTable} />
    </div>
  );
};

export default List;
