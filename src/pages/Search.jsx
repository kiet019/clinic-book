import React, { useEffect, useMemo, useState } from "react";
import { useGetListDoctor } from "../hook/useGetListDoctor";
import { DoctorVerticalCard } from "../components/Card/DoctorVerticalCard";
import { useGetListDepartment } from "../hook/useGetListDepartment";

function Search() {
  const { data, isFetching } = useGetListDoctor();
  const { data: listDepartment } = useGetListDepartment();

  const [viewSlot, setViewSlot] = useState(1);

  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleCheckboxChange = (name, isChecked) => {
    if (isChecked) {
      // Thêm vào danh sách nếu checkbox được chọn
      setSelectedDepartments((prev) => [...prev, name]);
    } else {
      // Loại bỏ khỏi danh sách nếu checkbox bị bỏ chọn
      setSelectedDepartments((prev) => prev.filter((item) => item !== name));
    }
  };

  useEffect(() => {
    console.log(selectedDepartments);
  }, [selectedDepartments]);

  const doctorFilterList = useMemo(() => {
    const list =
      data &&
      data
        .filter((e) => selectedDepartments.includes(e.department))
        .slice(0, viewSlot * 3);
    return selectedDepartments.length > 0
      ? list
      : data?.slice(0, viewSlot * 3) || [];
  }, [data, selectedDepartments, viewSlot]);
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/Home">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tìm Kiếm
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">
                Tìm thấy {data?.length} kết quả
              </h2>
            </div>
            <div className="col-md-4 col-12 d-md-block d-none">
              <div className="sort-by">
                <span className="sort-title">Sắp xếp theo</span>
                <span className="sortby-fliter">
                  <select className="select">
                    <option>Chọn</option>
                    <option className="sorting">Đánh Giá</option>
                    <option className="sorting">Phổ Biến</option>
                    <option className="sorting">Mới Nhất</option>
                    <option className="sorting">Miễn Phí</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Nội Dung Trang */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Bộ Lọc Tìm Kiếm */}
              <div className="card search-filter">
                <div className="card-header">
                  <h4 className="card-title mb-0">Bộ Lọc Tìm Kiếm</h4>
                </div>
                <div className="card-body">
                  
                  <div className="filter-widget">
                    <h4>Chọn Chuyên Khoa</h4>
                    {listDepartment &&
                      listDepartment.map((e) => (
                        <div key={e.departmentId}>
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="select_specialist"
                              onChange={(event) =>
                                handleCheckboxChange(
                                  e.name,
                                  event.target.checked
                                )
                              }
                            />
                            <span className="checkmark"></span>
                            {e.name}
                          </label>
                        </div>
                      ))}
                  </div>
                  <div className="btn-search">
                    <button type="button" className="btn btn-block">
                      Tìm Kiếm
                    </button>
                  </div>
                </div>
              </div>
              {/* /Bộ Lọc Tìm Kiếm */}
            </div>

            <div className="col-md-12 col-lg-8 col-xl-9">
              {!isFetching &&
                doctorFilterList &&
                doctorFilterList.map((e, index) => (
                  <DoctorVerticalCard doctor={e} index={index} />
                ))}
            </div>
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className="load-more text-center">
                <a
                  className="btn btn-primary btn-sm"
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    setViewSlot(viewSlot + 1);
                  }}
                >
                  Tải Thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Nội Dung Trang */}
    </div>
  );
}

export default Search;
