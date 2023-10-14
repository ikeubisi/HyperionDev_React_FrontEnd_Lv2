const InfoPopup = () => {
  return (
    <>
      {/* Learned about Boostrap Modals from Learn Bootstrap: A Step-by-Step
      Tutorial v5.3 (2023) YouTube. Available at:
      https://www.youtube.com/watch?v=MTRHi0gxPEo (Accessed: 19 September 2023).

      And based off code I wrote for my JavaScript capstone project
      https://github.com/markpackham/Hyperiondev-JavaScript-2023-Revise/blob/master/1%20-%20JavaScript%20Programming/L1T14%20-%20Capstone%20Project%20-%20Build%20Your%20Developer%20Portfolio/capstone_project/portfolio/html/about.html
      */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                This app lets your add todo items to a list, set them to
                completed, edit them and delete them. If they are completed they
                will fade out and be highlighted in green.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-info"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Show More Info <i className="fa-solid fa-arrow-right fa-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                More Info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                At the top you can see a total of how many complete and
                incomplete todos exist.
              </p>
              <p>You cannot edit a todo that is already set to completed.</p>
              <p>
                You must write a todo first before the &apos;Add todo&apos;
                button shows.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-info"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back To Main Info{" "}
                <i className="fa-solid fa-arrow-left fa-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="interests-btn-container mb-4">
        <a
          className="btn btn-info"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Show Info <i className="fa-solid fa-question fa-sm"></i>
        </a>
      </div>
    </>
  );
};

export default InfoPopup;
