<?php
    require 'vendor/autoload.php';
//$connect = new PDO("mysql:host=localhost;dbname=levere", "root", "");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer(true);
  try {
      // Server settings
     $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false; 
    $mail->Port = 25; 
  
      $mail->Username = 'kamaljeet@supremeanimation.com'; // YOUR gmail email
      $mail->Password = 'kamal@001'; // YOUR gmail password
  
      // Sender and recipient settings
      $mail->setFrom('kamaljeet@supremeanimation.com', 'Levere PVT LTD.');
      $mail->addAddress('kamaljeetsingh0001@gmail.com');
      $mail->addReplyTo('kamaljeet@supremeanimation.com', 'Levere PVT LTD.'); // to set the reply to
  
      // Setting the email content
      $mail->IsHTML(true);
      $mail->Subject = "Send email using Gmail SMTP and PHPMailer";
    $mail->Body = '
    <div style="background:white;box-sizing: border-box;margin: 0;padding: 0px;justify-content: center;align-items: center;display: flex;">
      <section style="width: 650px;height: 100vh;font-family: sans-serif;box-sizing: border-box;">
          <header style="background: #3c5b81;width: 100%;height: 130px;box-sizing: border-box;">
              <a href="#" style="display: block;text-decoration: none;list-style: none;"><img src="https://supremeanimation.com/levere/emailer/Levere-logo.png"
                      style="width: 203px;height: auto;object-fit: contain;padding: 25px;" alt="Levere-logo.png"></a>
          </header>
          <main style="height: auto;width:100%;background:white;box-sizing: border-box;clear: both;">
              <!-- heading start -->
              <div
                  style="width: 100%;height:auto;word-wrap: break-word;align-items: center;display: grid;justify-content: center;    padding: 3pc 0pc;">
                  <p style="text-align: center;font-size:24px;padding:0px;margin:0px;box-sizing: border-box;">
                      Quotation
                      application for QLoods project
                  </p>
                  <h1
                      style="text-align: center;font-size:24px;padding:0px;margin:0px;font-weight: 600;box-sizing: border-box;">
                      stijn vandevelde</h1>
              </div>
              <!-- end -->
              <!-- card start -->
              <div
                  style="box-sizing: border-box;width: 100%;height: 405px;justify-content: center;align-items: center;position: relative;padding: 20px;display: block;">
  
  
                  <div style="width: 47%;box-sizing: border-box;margin: 5px;float: left; background: #02723b;">
                      <!--tips: add .text-center,.text-right to the .card to change card text alignment-->
                      <img src="https://supremeanimation.com/levere/emailer/excel.png" style="width: 100%;height:280px;object-fit:cover;background-position: center;"
                          alt="excel.png">
                      <div
                          style="width:100%;height: auto;background:#3c5b81;box-sizing: border-box;display: flex;justify-content: center;align-items: center;">
                          <a href="https://supremeanimation.com/levere/uploads/"
                              style="position: relative;width: 100%;height: 70px;  background: #3c5b81;display: flex; justify-content: center;align-items: center;text-align: center;text-decoration: none;list-style: none;">
                              <sapn style="color: white;font-size: 18px;font-weight: 600;font-family: sans-serif;">
  
                                  Download Excel</sapn>
                          </a>
                      </div>
                  </div>
  
  
  
                  <div style="width: 47%;box-sizing: border-box;margin: 5px;float: right; background: #ef6c4e;">
                      <!--tips: add .text-center,.text-right to the .card to change card text alignment-->
                      <img src="https://supremeanimation.com/levere/emailer/QL1904-02899_vandevelde lv_vandevelde_3D.png"
                          style="width: 100%;height:280px;object-fit:cover;background-position: center;"
                          alt="QL1904-02899_vandevelde lv_vandevelde_3D.png">
                      <div
                          style="width:100%;height: auto;background:#3c5b81;box-sizing: border-box;display: flex;justify-content: center;align-items: center;">
                          <a href="https://supremeanimation.com/levere/3d_view/?id="
                              style="position: relative;width: 100%;height: 70px;  background: #3c5b81;display: flex; justify-content: center;align-items: center;text-align: center;text-decoration: none;list-style: none;">
                              <sapn style="color: white;font-size: 18px;font-weight: 600;font-family: sans-serif;">
  
                                  Download image 3D view</sapn>
                          </a>
                      </div>
                  </div>
  
  
              </div>
              <!-- end -->
              <!-- second row card -->
             
             
              <!-- end -->
              <!-- content div -->
              <div style="width: 100%;height: auto;box-sizing: border-box; padding: 20px;">
                  <h1 style="text-align: center; font-size: 50px;
                  font-family: Calibri; color: rgb(60, 91, 129); font-weight: bold; line-height: 1.2; text-align:
                      center;">Basic data request. </h1>
                  <p style="font-size: 18px;font-family:  Calibri; color: rgb(0, 0, 0); line-height: 1.2; text-align:
                      center;"> Below you see the basic data entered in the configurator.<br>
                      The complete set of data has been processed in the Excel.</p>
                  <div style=" width: 100%;height: auto;text-align: center;box-sizing: border-box;clear: both;">
                      <h2
                          style="font-size: 20px;font-family: Calibri;color: rgb(0, 0, 0);font-weight: bold;line-height: 1.2;text-decoration: underline grey;display: block;">
                          Applicant details:</h2>
                      <div style="width: 100%;height: auto;display: flex;">
                          <div style="width: 50%;text-align: right;padding:10px;">
                              <p>First Name:</p>
                              <p>Last name:</p>
                              <p>Company:</p>
                              <p>Email:</p>
                              <p>Phone:</p>
                              <p>Note:</p>
                          </div>
                          <div style="width: 50%;text-align: left;padding:10px;">
                              <p>Kamal</p>
                              <p>jeet</p>
                              <p>Supreme</p>
                              <p>kamaljeet</p>
                              <p>9043598345</p>
                              <p>comment</p>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- end -->
              <!-- content div -->
              <div style="width: 100%;height: auto;box-sizing: border-box; padding: 20px;">
                  <h1 style="text-align: center; font-size: 50px;
                  font-family: Calibri; color: rgb(60, 91, 129); font-weight: bold; line-height: 1.2; text-align:
                      center;"> Basic data QLoods. </h1>
                  <p style="font-size: 18px;font-family:  Calibri; color: rgb(0, 0, 0); line-height: 1.2; text-align:
                      center;">Below you see the basic data entered in the configurator.<br>
                      The complete set of data has been processed in the Excel.</p>
                  <div style=" width: 100%;height: auto;text-align: center;box-sizing: border-box;clear: both;">
                      <h2
                          style="font-size: 20px;font-family: Calibri;color: rgb(0, 0, 0);font-weight: bold;line-height: 1.2;text-decoration: underline grey;">
  
                          Data QLoods:</h2>
                      <div style="text-align: center;width: 100%;height: auto;display: flex;">
                          <div style="width: 50%;text-align: right;padding:10px;">
                              <p>Length:</p>
                              <p>Width:</p>
                              <p>Gutter Height:</p>
                              <p>Roof Slope:</p>
                              <p>Ridge height:</p>
                          </div>
                          <div style="width: 50%;text-align: left;padding:10px;">
                              <p></p>
                              <p></p>
                              <p>/p>
                              <p>/p>
                              <p></p>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- end -->
          </main>
  
          <footer
              style="width: 100%;height: 150px;background: url(https://supremeanimation.com/levere/test/emailer/fotter.svg);background-size: cover;background-repeat: no-repeat;">
  
          </footer>
      </section>
    </div>
    ';
  
      $mail->send();
      echo "Email message sent.";
  } catch (Exception $e) {
      echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
  }
?>