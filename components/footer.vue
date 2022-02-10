<template>
     <footer>
        <a href="#">
        <img src="../assets/imgs/footer-images/footer-logo.png" alt="footer-logo">
    </a>
        <div class="social-icons">
          

            <a href="#">
                <img src="../assets/imgs/footer-images/footer-social-1.png" alt="footer-social-1">
            </a>
            <a href="#">
                <img src="../assets/imgs/footer-images/footer-social-2.png" alt="footer-social-2">
            </a>
            <a href="#">
                <img src="../assets/imgs/footer-images/footer-social-3.png" alt="footer-social-3">
            </a>
            <a href="#">
                <img src="../assets/imgs/footer-images/footer-social-4.png" alt="footer-social-4">
            </a>
        </div>

        <p>BEO has traditional elements of roleplay and exploration the MMO’s we love have, combined with the play to earn mechanics of blockchain technology making it the first of its kind.</p>

        
        <div class="sub-footer">
            <p>2021 BeyondEarth. All Rights Reserved</p>
            <div>
                <a href="#">Privacy Notice</a>
                <p>|</p>
                <a href="#">Cookie Notice</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style >
        footer {
            
            
    background-color: #000;
    text-align: center;
    padding: 52px 100px 30px;
}

.social-icons {
    max-width: 190px;
    margin: 36px auto 20px;
    display: flex;
    justify-content: space-between;
    
}

footer> a >img {
    margin: 0 auto;
    max-width: 120px;
    width: 100%;
}

footer>p {
    font-family: poppins ,sans-serif;
    max-width: 760px;
    margin: 0 auto;
    line-height: 24px;
    margin-bottom: 60px;
    color: white;
    font-size: 16px;
}


.sub-footer {
    border: 1px soild red !important;
    /* border-top: 1px solid #808080; */
    padding-top: 32px;
}


.sub-footer p, a {
    color: #808080;
    font-family: 'Poppins';
    text-decoration: none;
    font-size: 16px;
}

.sub-footer {
    display: flex;
    justify-content: space-between;
}

.sub-footer div {
    display: flex;
    max-width: 250px;
    justify-content: space-between;
    width: 100%;
}



/* ======media-query============ */
@media (max-width: 768px) {
    footer {
    padding: 52px 18px 30px;
}
}

@media (max-width: 580px) {
    .sub-footer {
    flex-direction: column;
    align-items: center;

}

.sub-footer div {
    flex-direction: column;
}

.sub-footer p, a {
    margin-bottom: 14px;
    font-size: 14px;
}

.sub-footer div p:first-of-type {
    display: none;
}
footer>p {
    font-size: 14px;
}

}

</style>
