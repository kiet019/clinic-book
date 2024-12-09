import { StarRating } from "./StartRating";

export const DoctorRatingCard = ({ doctorRating, id }) => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: 5,
        padding: 10,
        paddingBottom: 20,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <img
          alt="user"
          style={{
            marginTop: 5,
            width: 44,
            height: 44,
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="https://berrydashboard.io/assets/avatar-1-Dja0YEDP.png"
        />
        <div style={{ marginLeft: 20 }}>
          <h6 style={{ margin: 0, height: 22.5, marginTop: 5 }}>Người {id}</h6>
          <p
            style={{
              margin: 0,
              color: "#697586",
              fontSize: 12,
              marginTop: 5,
              fontWeight: 500,
            }}
          >
            {doctorRating.createdAt}
          </p>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 5 }}>
          <StarRating rating={doctorRating.rating} />
          <p>{doctorRating.comment}</p>
        </div>
      </div>
    </div>
  );
};
