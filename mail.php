<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$connect = mysqli_connect('localhost','careca_levere','levere@001','careca_levere') or die();

if (isset($_POST['email'])) {

    $randStr = md5(rand());

    $Solution = isset($_POST['Solution']) ? $_POST['Solution'] : " ";
    $name = isset($_POST['name']) ? $_POST['name'] : " ";
    $Street = isset($_POST['Street']) ? $_POST['Street'] : " ";
    $HouseNumber = $_POST['HouseNumber'];
    $Postcode = isset($_POST['Postcode']) ? $_POST['Postcode'] : " ";
    $Place = isset($_POST['Place']) ? $_POST['Place'] : " ";
    $Phone = isset($_POST['Phone']) ? $_POST['Phone'] : " ";
    $email = isset($_POST['email']) ? $_POST['email'] : " ";
    $hps_coating = $_POST['hps_coating'];
    $dakgoten = $_POST['dakgoten'];
    $dakgoten_zijde = $_POST['dakgoten_zijde'];
    $dakgoten_goten = $_POST['dakgoten_goten'];
    $sectionaaldeur = $_POST['sectionaaldeur'];

console.log($_POST);
    $idee = $_POST['idee'];
    $heb = $_POST['heb'];
    $zonder = $_POST['zonder'];
    $aanvraag = $_POST['aanvraag'];
    $vraag = $_POST['vraag'];
    $length = $_POST['length'];
    $width = $_POST['width'];
    $Gutter = $_POST['Gutter'];
    $Slope = $_POST['Slope'];
    $Ridge = $_POST['Ridge'];
    $roof = $_POST['roof'];
    $walls = $_POST['walls'];
    $roofstyle = $_POST['roofstyle'];
    $wallstyle = $_POST['wallstyle'];
    $bigbox = $_POST['bigbox'];
    $construction = $_POST['construction'];
    $doorHexColor = $_POST['doorHexColor'];
    $roofhexColor = $_POST['roofhexColor'];
    $wallcolor = $_POST['wallcolor'];
    $construction = $_POST['construction'];
    $WalkindoorHexColor = $_POST['WalkindoorHexColor'];


    $frontSectionalDoor1is = $_POST['frontSectionalDoor1is'];
    $frontSectionalDoor2is = $_POST['frontSectionalDoor2is'];
    $frontSectionalDoor3is = $_POST['frontSectionalDoor3is'];
    $frontSectionalDoor4is = $_POST['frontSectionalDoor4is'];
    $FrontDoorHeight1 = $_POST['FrontDoorHeight1'];
    $FrontDoorHeight2 = $_POST['FrontDoorHeight2'];
    $FrontDoorHeight3 = $_POST['FrontDoorHeight3'];
    $FrontDoorHeight4 = $_POST['FrontDoorHeight4'];
    $FrontDoorWidth1 = $_POST['FrontDoorWidth1'];
    $FrontDoorWidth2 = $_POST['FrontDoorWidth2'];
    $FrontDoorWidth3 = $_POST['FrontDoorWidth3'];
    $FrontDoorWidth4 = $_POST['FrontDoorWidth4'];
    $FrontDoorPosition1 = $_POST['FrontDoorPosition1'];
    $FrontDoorPosition2 = $_POST['FrontDoorPosition2'];
    $FrontDoorPosition3 = $_POST['FrontDoorPosition3'];
    $FrontDoorPosition4 = $_POST['FrontDoorPosition4'];
    $FrontdoorRightDistance = $_POST['FrontdoorRightDistance'];
    $Frontdoor2RightDistance = $_POST['Frontdoor2RightDistance'];
    $Frontdoor3RightDistance = $_POST['Frontdoor3RightDistance'];
    $Frontdoor4RightDistance = $_POST['Frontdoor4RightDistance'];
    $FrontdoorLeftDistance = $_POST['FrontdoorLeftDistance'];
    $Frontdoor2LeftDistance = $_POST['Frontdoor2LeftDistance'];
    $Frontdoor3LeftDistance = $_POST['Frontdoor3LeftDistance'];
    $Frontdoor4LeftDistance = $_POST['Frontdoor4LeftDistance'];

    $BackSectionalDoor1is = $_POST['BackSectionalDoor1is'];
    $BackSectionalDoor2is = $_POST['BackSectionalDoor2is'];
    $BackSectionalDoor3is = $_POST['BackSectionalDoor3is'];
    $BackSectionalDoor4is = $_POST['BackSectionalDoor4is'];
    $BackDoorHeight1 = $_POST['BackDoorHeight1'];
    $BackDoorHeight2 = $_POST['BackDoorHeight2'];
    $BackDoorHeight3 = $_POST['BackDoorHeight3'];
    $BackDoorHeight4 = $_POST['BackDoorHeight4'];
    $BackDoorWidth1 = $_POST['BackDoorWidth1'];
    $BackDoorWidth2 = $_POST['BackDoorWidth2'];
    $BackDoorWidth3 = $_POST['BackDoorWidth3'];
    $BackDoorWidth4 = $_POST['BackDoorWidth4'];
    $BackDoorPosition1 = $_POST['BackDoorPosition1'];
    $BackDoorPosition2 = $_POST['BackDoorPosition2'];
    $BackDoorPosition3 = $_POST['BackDoorPosition3'];
    $BackDoorPosition4 = $_POST['BackDoorPosition4'];
    $BackdoorRightDistance = $_POST['BackdoorRightDistance'];
    $Backdoor2RightDistance = $_POST['Backdoor2RightDistance'];
    $Backdoor3RightDistance = $_POST['Backdoor3RightDistance'];
    $Backdoor4RightDistance = $_POST['Backdoor4RightDistance'];
    $BackdoorLeftDistance = $_POST['BackdoorLeftDistance'];
    $Backdoor2LeftDistance = $_POST['Backdoor2LeftDistance'];
    $Backdoor3LeftDistance = $_POST['Backdoor3LeftDistance'];
    $Backdoor4LeftDistance = $_POST['Backdoor4LeftDistance'];

    $rightSectionalDoor1is = $_POST['rightSectionalDoor1is'];
    $rightSectionalDoor2is = $_POST['rightSectionalDoor2is'];
    $rightSectionalDoor3is = $_POST['rightSectionalDoor3is'];
    $rightSectionalDoor4is = $_POST['rightSectionalDoor4is'];
    $RightDoorHeight1 = $_POST['RightDoorHeight1'];
    $RightDoorHeight2 = $_POST['RightDoorHeight2'];
    $RightDoorHeight3 = $_POST['RightDoorHeight3'];
    $RightDoorHeight4 = $_POST['RightDoorHeight4'];
    $RightDoorWidth1 = $_POST['RightDoorWidth1'];
    $RightDoorWidth2 = $_POST['RightDoorWidth2'];
    $RightDoorWidth3 = $_POST['RightDoorWidth3'];
    $RightDoorWidth4 = $_POST['RightDoorWidth4'];
    $RightDoorPosition1 = $_POST['RightDoorPosition1'];
    $RightDoorPosition2 = $_POST['RightDoorPosition2'];
    $RightDoorPosition3 = $_POST['RightDoorPosition3'];
    $RightDoorPosition4 = $_POST['RightDoorPosition4'];
    $RightdoorRightDistance = $_POST['RightdoorRightDistance'];
    $Rightdoor2RightDistance = $_POST['Rightdoor2RightDistance'];
    $Rightdoor3RightDistance = $_POST['Rightdoor3RightDistance'];
    $Rightdoor4RightDistance = $_POST['Rightdoor4RightDistance'];
    $RightdoorLeftDistance = $_POST['RightdoorLeftDistance'];
    $Rightdoor2LeftDistance = $_POST['Rightdoor2LeftDistance'];
    $Rightdoor3LeftDistance = $_POST['Rightdoor3LeftDistance'];
    $Rightdoor4LeftDistance = $_POST['Rightdoor4LeftDistance'];

    $leftSectionalDoor1is = $_POST['leftSectionalDoor1is'];
    $leftSectionalDoor2is = $_POST['leftSectionalDoor2is'];
    $leftSectionalDoor3is = $_POST['leftSectionalDoor3is'];
    $leftSectionalDoor4is = $_POST['leftSectionalDoor4is'];
    $LeftDoorHeight1 = $_POST['LeftDoorHeight1'];
    $LeftDoorHeight2 = $_POST['LeftDoorHeight2'];
    $LeftDoorHeight3 = $_POST['LeftDoorHeight3'];
    $LeftDoorHeight4 = $_POST['LeftDoorHeight4'];
    $LeftDoorWidth1 = $_POST['LeftDoorWidth1'];
    $LeftDoorWidth2 = $_POST['LeftDoorWidth2'];
    $LeftDoorWidth3 = $_POST['LeftDoorWidth3'];
    $LeftDoorWidth4 = $_POST['LeftDoorWidth4'];
    $LeftDoorPosition1 = $_POST['LeftDoorPosition1'];
    $LeftDoorPosition2 = $_POST['LeftDoorPosition2'];
    $LeftDoorPosition3 = $_POST['LeftDoorPosition3'];
    $LeftDoorPosition4 = $_POST['LeftDoorPosition4'];
    $LeftdoorRightDistance = $_POST['LeftdoorRightDistance'];
    $Leftdoor2RightDistance = $_POST['Leftdoor2RightDistance'];
    $Leftdoor3RightDistance = $_POST['Leftdoor3RightDistance'];
    $Leftdoor4RightDistance = $_POST['Leftdoor4RightDistance'];
    $LeftdoorLeftDistance = $_POST['LeftdoorLeftDistance'];
    $Leftdoor2LeftDistance = $_POST['Leftdoor2LeftDistance'];
    $Leftdoor3LeftDistance = $_POST['Leftdoor3LeftDistance'];
    $Leftdoor4LeftDistance = $_POST['Leftdoor4LeftDistance'];
    
    $frontWalkingDoor1is = $_POST['frontWalkingDoor1is'];
    $frontWalkingDoor2is = $_POST['frontWalkingDoor2is'];
    $frontWalkingDoor3is = $_POST['frontWalkingDoor3is'];
    $frontWalkingDoor4is = $_POST['frontWalkingDoor4is'];
    $FrontWalkinDoorPosition1 = $_POST['FrontWalkinDoorPosition1'];
    $FrontWalkinDoorPosition2 = $_POST['FrontWalkinDoorPosition2'];
    $FrontWalkinDoorPosition3 = $_POST['FrontWalkinDoorPosition3'];
    $FrontWalkinDoorPosition4 = $_POST['FrontWalkinDoorPosition4'];
    $FrontWalkindoorLeftDistance1 = $_POST['FrontWalkindoorLeftDistance'];
    $FrontWalkindoorLeftDistance2 = $_POST['FrontWalkindoorLeftDistance2'];
    $FrontWalkindoorLeftDistance3 = $_POST['FrontWalkindoorLeftDistance3'];
    $FrontWalkindoorLeftDistance4 = $_POST['FrontWalkindoorLeftDistance4'];
    $FrontWalkindoorRightDistance1 = $_POST['FrontWalkindoorRightDistance'];
    $FrontWalkindoorRightDistance2 = $_POST['FrontWalkindoorRightDistance2'];
    $FrontWalkindoorRightDistance3 = $_POST['FrontWalkindoorRightDistance3'];
    $FrontWalkindoorRightDistance4 = $_POST['FrontWalkindoorRightDistance4'];

    $BackWalkingDoor1is = $_POST['BackWalkingDoor1is'];
    $BackWalkingDoor2is = $_POST['BackWalkingDoor2is'];
    $BackWalkingDoor3is = $_POST['BackWalkingDoor3is'];
    $BackWalkingDoor4is = $_POST['BackWalkingDoor4is'];
    $BackWalkinDoorPosition1 = $_POST['BackWalkinDoorPosition1'];
    $BackWalkinDoorPosition2 = $_POST['BackWalkinDoorPosition2'];
    $BackWalkinDoorPosition3 = $_POST['BackWalkinDoorPosition3'];
    $BackWalkinDoorPosition4 = $_POST['BackWalkinDoorPosition4'];
    $BackWalkindoorLeftDistance1 = $_POST['BackWalkindoorLeftDistance1'];
    $BackWalkindoorLeftDistance2 = $_POST['BackWalkindoorLeftDistance2'];
    $BackWalkindoorLeftDistance3 = $_POST['BackWalkindoorLeftDistance3'];
    $BackWalkindoorLeftDistance4 = $_POST['BackWalkindoorLeftDistance4'];
    $BackWalkindoorRightDistance1 = $_POST['BackWalkindoorRightDistance1'];
    $BackWalkindoorRightDistance2 = $_POST['BackWalkindoorRightDistance2'];
    $BackWalkindoorRightDistance3 = $_POST['BackWalkindoorRightDistance3'];
    $BackWalkindoorRightDistance4 = $_POST['BackWalkindoorRightDistance4'];

    $rightWalkingDoor1is = $_POST['rightWalkingDoor1is'];
    $rightWalkingDoor2is = $_POST['rightWalkingDoor2is'];
    $rightWalkingDoor3is = $_POST['rightWalkingDoor3is'];
    $rightWalkingDoor4is = $_POST['rightWalkingDoor4is'];
    $RightWalkinDoorPosition1 =  $_POST['RightWalkinDoorPosition1'];
    $RightWalkinDoorPosition2 =  $_POST['RightWalkinDoorPosition2'];
    $RightWalkinDoorPosition3 =  $_POST['RightWalkinDoorPosition3'];
    $RightWalkinDoorPosition4 =  $_POST['RightWalkinDoorPosition4'];
    $RightWalkindoorLeftDistance1 =  $_POST['RightWalkindoorLeftDistance1'];
    $RightWalkindoorLeftDistance2 =  $_POST['RightWalkindoorLeftDistance2'];
    $RightWalkindoorLeftDistance3 =  $_POST['RightWalkindoorLeftDistance3'];
    $RightWalkindoorLeftDistance4 =  $_POST['RightWalkindoorLeftDistance4'];
    $RightWalkindoorRightDistance1 =  $_POST['RightWalkindoorRightDistance1'];
    $RightWalkindoorRightDistance2 =  $_POST['RightWalkindoorRightDistance2'];
    $RightWalkindoorRightDistance3 =  $_POST['RightWalkindoorRightDistance3'];
    $RightWalkindoorRightDistance4 =  $_POST['RightWalkindoorRightDistance4'];
    
    $leftWalkingDoor1is = $_POST['leftWalkingDoor1is'];
    $leftWalkingDoor2is = $_POST['leftWalkingDoor2is'];
    $leftWalkingDoor3is = $_POST['leftWalkingDoor3is'];
    $leftWalkingDoor4is = $_POST['leftWalkingDoor4is'];
    $LeftWalkinDoorPosition1 =  $_POST['LeftWalkinDoorPosition1'];
    $LeftWalkinDoorPosition2 =  $_POST['LeftWalkinDoorPosition2'];
    $LeftWalkinDoorPosition3 =  $_POST['LeftWalkinDoorPosition3'];
    $LeftWalkinDoorPosition4 =  $_POST['LeftWalkinDoorPosition4'];
    $LeftWalkindoorLeftDistance1 = $_POST['LeftWalkindoorLeftDistance1'];
    $LeftWalkindoorLeftDistance2 = $_POST['LeftWalkindoorLeftDistance2'];
    $LeftWalkindoorLeftDistance3 = $_POST['LeftWalkindoorLeftDistance3'];
    $LeftWalkindoorLeftDistance4 = $_POST['LeftWalkindoorLeftDistance4'];
    $LeftWalkindoorRightDistance1 = $_POST['LeftWalkindoorRightDistance1'];
    $LeftWalkindoorRightDistance2 = $_POST['LeftWalkindoorRightDistance2'];
    $LeftWalkindoorRightDistance3 = $_POST['LeftWalkindoorRightDistance3'];
    $LeftWalkindoorRightDistance4 = $_POST['LeftWalkindoorRightDistance4'];
    
    $w_color = $_POST['w_color'];
    $rooft_color = $_POST['rooft_color'];
    $door_color = $_POST['door_color'];
    $wd_color = $_POST['wd_color'];

    $sSheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('template.xlsx');
    $worksheet = $sSheet->getSheetByName('Sheet1');
    $worksheet->getCell('B10')->setValue($Solution);
    $worksheet->getCell('B11')->setValue($name);
    $worksheet->getCell('B13')->setValue($Street.' '.$HouseNumber);
    $worksheet->getCell('B14')->setValue($Postcode);
    $worksheet->getCell('B15')->setValue($Place);
    $worksheet->getCell('B16')->setValue($Phone);
    $worksheet->getCell('B17')->setValue($email);
    $worksheet->getCell('A21')->setValue($hps_coating);
    $worksheet->getCell('A22')->setValue($dakgoten);
    $worksheet->getCell('A23')->setValue($dakgoten_zijde);
    $worksheet->getCell('A24')->setValue($dakgoten_goten);
    $worksheet->getCell('A25')->setValue($sectionaaldeur);

    $worksheet->getCell('A26')->setValue($idee);
    $worksheet->getCell('A27')->setValue($heb);
    $worksheet->getCell('A28')->setValue($zonder);
    $worksheet->getCell('A29')->setValue($aanvraag);
    $worksheet->getCell('A30')->setValue($vraag);
    $worksheet->getCell('B18')->setValue($bigbox);
    $worksheet->getCell('B19')->setValue($construction);
    $worksheet->getCell('B33')->setValue($length);
    $worksheet->getCell('B34')->setValue($width);
    $worksheet->getCell('B35')->setValue($Gutter);
    $worksheet->getCell('B36')->setValue($Slope);
    $worksheet->getCell('B37')->setValue($Ridge);
    $worksheet->getCell('B38')->setValue($roof);
    $worksheet->getCell('B39')->setValue($walls);
    if($roofstyle == 1) {
      $worksheet->getCell('B41')->setValue('Trapezium');  
    } else if($roofstyle == 2) {
      $worksheet->getCell('B42')->setValue('Dakpan');  

    }
    if($roofstyle == 1) {
      $worksheet->getCell('B42')->setValue('Microrib');  
    } else if($roofstyle == 2) {
      $worksheet->getCell('B42')->setValue('Gelinieerd');  

    }
    $worksheet->getCell('A46')->setValue($frontSectionalDoor1is);
    $worksheet->getCell('A47')->setValue($frontSectionalDoor2is);
    $worksheet->getCell('A48')->setValue($frontSectionalDoor3is);
    $worksheet->getCell('A49')->setValue($frontSectionalDoor4is);
    $worksheet->getCell('A50')->setValue($BackSectionalDoor1is);
    $worksheet->getCell('A51')->setValue($BackSectionalDoor2is);
    $worksheet->getCell('A52')->setValue($BackSectionalDoor3is);
    $worksheet->getCell('A53')->setValue($BackSectionalDoor4is);
    $worksheet->getCell('A54')->setValue($leftSectionalDoor1is);
    $worksheet->getCell('A55')->setValue($leftSectionalDoor2is);
    $worksheet->getCell('A56')->setValue($leftSectionalDoor3is);
    $worksheet->getCell('A57')->setValue($leftSectionalDoor4is);
    $worksheet->getCell('A58')->setValue($rightSectionalDoor1is);
    $worksheet->getCell('A59')->setValue($rightSectionalDoor2is);
    $worksheet->getCell('A60')->setValue($rightSectionalDoor3is);
    $worksheet->getCell('A61')->setValue($rightSectionalDoor4is);
    $worksheet->getCell('D46')->setValue($FrontDoorHeight1);
    $worksheet->getCell('D47')->setValue($FrontDoorHeight2);
    $worksheet->getCell('D48')->setValue($FrontDoorHeight3);
    $worksheet->getCell('D49')->setValue($FrontDoorHeight4);
    $worksheet->getCell('D50')->setValue($BackDoorHeight1);
    $worksheet->getCell('D51')->setValue($BackDoorHeight2);
    $worksheet->getCell('D52')->setValue($BackDoorHeight3);
    $worksheet->getCell('D53')->setValue($BackDoorHeight4);
    $worksheet->getCell('D54')->setValue($LeftDoorHeight1);
    $worksheet->getCell('D55')->setValue($LeftDoorHeight2);
    $worksheet->getCell('D56')->setValue($LeftDoorHeight3);
    $worksheet->getCell('D57')->setValue($LeftDoorHeight4);
    $worksheet->getCell('D58')->setValue($RightDoorHeight1);
    $worksheet->getCell('D59')->setValue($RightDoorHeight2);
    $worksheet->getCell('D60')->setValue($RightDoorHeight3);
    $worksheet->getCell('D61')->setValue($RightDoorHeight4);
    $worksheet->getCell('E46')->setValue($FrontDoorWidth1);
    $worksheet->getCell('E47')->setValue($FrontDoorWidth2);
    $worksheet->getCell('E48')->setValue($FrontDoorWidth3);
    $worksheet->getCell('E49')->setValue($FrontDoorWidth4);
    $worksheet->getCell('E50')->setValue($BackDoorWidth1);
    $worksheet->getCell('E51')->setValue($BackDoorWidth2);
    $worksheet->getCell('E52')->setValue($BackDoorWidth3);
    $worksheet->getCell('E53')->setValue($BackDoorWidth4);
    $worksheet->getCell('E54')->setValue($LeftDoorWidth1);
    $worksheet->getCell('E55')->setValue($LeftDoorWidth2);
    $worksheet->getCell('E56')->setValue($LeftDoorWidth3);
    $worksheet->getCell('E57')->setValue($LeftDoorWidth4);
    $worksheet->getCell('E58')->setValue($RightDoorWidth1);
    $worksheet->getCell('E59')->setValue($RightDoorWidth2);
    $worksheet->getCell('E60')->setValue($RightDoorWidth3);
    $worksheet->getCell('E61')->setValue($RightDoorWidth4);
    $worksheet->getCell('F46')->setValue($FrontDoorPosition1);
    $worksheet->getCell('F47')->setValue($FrontDoorPosition2);
    $worksheet->getCell('F48')->setValue($FrontDoorPosition3);
    $worksheet->getCell('F49')->setValue($FrontDoorPosition4);
    $worksheet->getCell('F50')->setValue($BackDoorPosition1);
    $worksheet->getCell('F51')->setValue($BackDoorPosition2);
    $worksheet->getCell('F52')->setValue($BackDoorPosition3);
    $worksheet->getCell('F53')->setValue($BackDoorPosition4);
    $worksheet->getCell('F54')->setValue($LeftDoorPosition1);
    $worksheet->getCell('F55')->setValue($LeftDoorPosition2);
    $worksheet->getCell('F56')->setValue($LeftDoorPosition3);
    $worksheet->getCell('F57')->setValue($LeftDoorPosition4);
    $worksheet->getCell('F58')->setValue($RightDoorPosition1);
    $worksheet->getCell('F59')->setValue($RightDoorPosition2);
    $worksheet->getCell('F60')->setValue($RightDoorPosition3);
    $worksheet->getCell('F61')->setValue($RightDoorPosition4);
    $worksheet->getCell('G46')->setValue($FrontdoorRightDistance);
    $worksheet->getCell('G47')->setValue($Frontdoor2RightDistance);
    $worksheet->getCell('G48')->setValue($Frontdoor3RightDistance);
    $worksheet->getCell('G49')->setValue($Frontdoor4RightDistance);
    $worksheet->getCell('G50')->setValue($BackdoorRightDistance);
    $worksheet->getCell('G51')->setValue($Backdoor2RightDistance);
    $worksheet->getCell('G52')->setValue($Backdoor3RightDistance);
    $worksheet->getCell('G53')->setValue($Backdoor4RightDistance);
    $worksheet->getCell('G54')->setValue($LeftdoorRightDistance);
    $worksheet->getCell('G55')->setValue($Leftdoor2RightDistance);
    $worksheet->getCell('G56')->setValue($Leftdoor3RightDistance);
    $worksheet->getCell('G57')->setValue($Leftdoor4RightDistance);
    $worksheet->getCell('G58')->setValue($RightdoorRightDistance);
    $worksheet->getCell('G59')->setValue($Rightdoor2RightDistance);
    $worksheet->getCell('G60')->setValue($Rightdoor3RightDistance);
    $worksheet->getCell('G61')->setValue($Rightdoor4RightDistance);
    $worksheet->getCell('I46')->setValue($FrontdoorLeftDistance);
    $worksheet->getCell('I47')->setValue($Frontdoor2LeftDistance);
    $worksheet->getCell('I48')->setValue($Frontdoor3LeftDistance);
    $worksheet->getCell('I49')->setValue($Frontdoor4LeftDistance);
    $worksheet->getCell('I50')->setValue($BackdoorLeftDistance);
    $worksheet->getCell('I51')->setValue($Backdoor2LeftDistance);
    $worksheet->getCell('I52')->setValue($Backdoor3LeftDistance);
    $worksheet->getCell('I53')->setValue($Backdoor4LeftDistance);
    $worksheet->getCell('I54')->setValue($LeftdoorLeftDistance);
    $worksheet->getCell('I55')->setValue($Leftdoor2LeftDistance);
    $worksheet->getCell('I56')->setValue($Leftdoor3LeftDistance);
    $worksheet->getCell('I57')->setValue($Leftdoor4LeftDistance);
    $worksheet->getCell('I58')->setValue($RightdoorLeftDistance);
    $worksheet->getCell('I59')->setValue($Rightdoor2LeftDistance);
    $worksheet->getCell('I60')->setValue($Rightdoor3LeftDistance);
    $worksheet->getCell('I61')->setValue($Rightdoor4LeftDistance);
    $worksheet->getCell('A67')->setValue($frontWalkingDoor1is);
    $worksheet->getCell('A68')->setValue($frontWalkingDoor2is);
    $worksheet->getCell('A69')->setValue($frontWalkingDoor3is);
    $worksheet->getCell('A70')->setValue($frontWalkingDoor4is);
    $worksheet->getCell('A71')->setValue($BackWalkingDoor1is);
    $worksheet->getCell('A72')->setValue($BackWalkingDoor2is);
    $worksheet->getCell('A73')->setValue($BackWalkingDoor3is);
    $worksheet->getCell('A74')->setValue($BackWalkingDoor4is);
    $worksheet->getCell('A75')->setValue($leftWalkingDoor1is);
    $worksheet->getCell('A76')->setValue($leftWalkingDoor2is);
    $worksheet->getCell('A77')->setValue($leftWalkingDoor3is);
    $worksheet->getCell('A78')->setValue($leftWalkingDoor4is);
    $worksheet->getCell('A79')->setValue($rightWalkingDoor1is);
    $worksheet->getCell('A80')->setValue($rightWalkingDoor2is);
    $worksheet->getCell('A81')->setValue($rightWalkingDoor3is);
    $worksheet->getCell('A82')->setValue($rightWalkingDoor4is);
    $worksheet->getCell('D67')->setValue('2.2');
    $worksheet->getCell('D68')->setValue('2.2');
    $worksheet->getCell('D69')->setValue('2.2');
    $worksheet->getCell('D70')->setValue('2.2');
    $worksheet->getCell('D71')->setValue('2.2');
    $worksheet->getCell('D72')->setValue('2.2');
    $worksheet->getCell('D73')->setValue('2.2');
    $worksheet->getCell('D74')->setValue('2.2');
    $worksheet->getCell('D75')->setValue('2.2');
    $worksheet->getCell('D76')->setValue('2.2');
    $worksheet->getCell('D77')->setValue('2.2');
    $worksheet->getCell('D78')->setValue('2.2');
    $worksheet->getCell('D79')->setValue('2.2');
    $worksheet->getCell('D80')->setValue('2.2');
    $worksheet->getCell('D81')->setValue('2.2');
    $worksheet->getCell('D82')->setValue('2.2');
    $worksheet->getCell('E67')->setValue('1');
    $worksheet->getCell('E68')->setValue('1');
    $worksheet->getCell('E69')->setValue('1');
    $worksheet->getCell('E70')->setValue('1');
    $worksheet->getCell('E71')->setValue('1');
    $worksheet->getCell('E72')->setValue('1');
    $worksheet->getCell('E73')->setValue('1');
    $worksheet->getCell('E74')->setValue('1');
    $worksheet->getCell('E75')->setValue('1');
    $worksheet->getCell('E76')->setValue('1');
    $worksheet->getCell('E77')->setValue('1');
    $worksheet->getCell('E78')->setValue('1');
    $worksheet->getCell('E79')->setValue('1');
    $worksheet->getCell('E80')->setValue('1');
    $worksheet->getCell('E81')->setValue('1');
    $worksheet->getCell('E82')->setValue('1');
    $worksheet->getCell('F67')->setValue($FrontWalkinDoorPosition1);
    $worksheet->getCell('F68')->setValue($FrontWalkinDoorPosition2);
    $worksheet->getCell('F69')->setValue($FrontWalkinDoorPosition3);
    $worksheet->getCell('F70')->setValue($FrontWalkinDoorPosition4);
    $worksheet->getCell('F71')->setValue($BackWalkinDoorPosition1);
    $worksheet->getCell('F72')->setValue($BackWalkinDoorPosition2);
    $worksheet->getCell('F73')->setValue($BackWalkinDoorPosition3);
    $worksheet->getCell('F74')->setValue($BackWalkinDoorPosition4);
    $worksheet->getCell('F75')->setValue($LeftWalkinDoorPosition1);
    $worksheet->getCell('F76')->setValue($LeftWalkinDoorPosition2);
    $worksheet->getCell('F77')->setValue($LeftWalkinDoorPosition3);
    $worksheet->getCell('F78')->setValue($LeftWalkinDoorPosition4);
    $worksheet->getCell('F79')->setValue($RightWalkinDoorPosition1);
    $worksheet->getCell('F80')->setValue($RightWalkinDoorPosition2);
    $worksheet->getCell('F81')->setValue($RightWalkinDoorPosition3);
    $worksheet->getCell('F82')->setValue($RightWalkinDoorPosition4);
    $worksheet->getCell('G67')->setValue($FrontWalkindoorRightDistance1);
    $worksheet->getCell('G68')->setValue($FrontWalkindoorRightDistance2);
    $worksheet->getCell('G69')->setValue($FrontWalkindoorRightDistance3);
    $worksheet->getCell('G70')->setValue($FrontWalkindoorRightDistance4);
    $worksheet->getCell('G71')->setValue($BackWalkindoorRightDistance1);
    $worksheet->getCell('G72')->setValue($BackWalkindoorRightDistance2);
    $worksheet->getCell('G73')->setValue($BackWalkindoorRightDistance3);
    $worksheet->getCell('G74')->setValue($BackWalkindoorRightDistance4);
    $worksheet->getCell('G75')->setValue($LeftWalkindoorRightDistance1);
    $worksheet->getCell('G76')->setValue($LeftWalkindoorRightDistance2);
    $worksheet->getCell('G77')->setValue($LeftWalkindoorRightDistance3);
    $worksheet->getCell('G78')->setValue($LeftWalkindoorRightDistance4);
    $worksheet->getCell('G79')->setValue($RightWalkindoorRightDistance1);
    $worksheet->getCell('G80')->setValue($RightWalkindoorRightDistance2);
    $worksheet->getCell('G81')->setValue($RightWalkindoorRightDistance3);
    $worksheet->getCell('G82')->setValue($RightWalkindoorRightDistance4);
    $worksheet->getCell('I67')->setValue($FrontWalkindoorLeftDistance1);
    $worksheet->getCell('I68')->setValue($FrontWalkindoorLeftDistance2);
    $worksheet->getCell('I69')->setValue($FrontWalkindoorLeftDistance3);
    $worksheet->getCell('I70')->setValue($FrontWalkindoorLeftDistance4);
    $worksheet->getCell('I71')->setValue($BackWalkindoorLeftDistance1);
    $worksheet->getCell('I72')->setValue($BackWalkindoorLeftDistance2);
    $worksheet->getCell('I73')->setValue($BackWalkindoorLeftDistance3);
    $worksheet->getCell('I74')->setValue($BackWalkindoorLeftDistance4);
    $worksheet->getCell('I75')->setValue($LeftWalkindoorLeftDistance1);
    $worksheet->getCell('I76')->setValue($LeftWalkindoorLeftDistance2);
    $worksheet->getCell('I77')->setValue($LeftWalkindoorLeftDistance3);
    $worksheet->getCell('I78')->setValue($LeftWalkindoorLeftDistance4);
    $worksheet->getCell('I79')->setValue($RightWalkindoorLeftDistance1);
    $worksheet->getCell('I80')->setValue($RightWalkindoorLeftDistance2);
    $worksheet->getCell('I81')->setValue($RightWalkindoorLeftDistance3);
    $worksheet->getCell('I82')->setValue($RightWalkindoorLeftDistance4);
    $worksheet->getCell('B85')->setValue($w_color);
    $worksheet->getCell('B86')->setValue($rooft_color);
    $worksheet->getCell('B87')->setValue($door_color);
    $worksheet->getCell('B88')->setValue($wd_color);

    $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($sSheet);
    $writer->save("uploads/".$randStr.".xlsx");
    $query =
        "INSERT INTO designed_house 
        (
            fname,  
            Land, 
            HouseNumber, 
            Postcode, 
            Place, 
            Phone, 
            email, 
            bigbox, 
            length, 
            width, 
            Gutter, 
            Slope, 
            Ridge, 
            roof, 
            walls, 
            roofstyle, 
            wallstyle, 
            construction, 
            doorHexColor, 
            roofhexColor, 
            hexcolor, 
            frontSectionaDoor1is, 
            frontSectionaDoor2is, 
            frontSectionaDoor3is, 
            frontSectionaDoor4is, 
            BackSectionalDoor1is, 
            BackSectionalDoor2is, 
            BackSectionalDoor3is, 
            BackSectionalDoor4is, 
            leftSectionalDoor1is, 
            leftSectionalDoor2is, 
            leftSectionalDoor3is, 
            leftSectionalDoor4is, 
            rightSectionalDoor1is, 
            rightSectionalDoor2is, 
            rightSectionalDoor3is, 
            rightSectionalDoor4is, 
            frontWalkingDoor1is, 
            frontWalkingDoor2is, 
            frontWalkingDoor3is, 
            frontWalkingDoor4is, 
            BackWalkingDoor1is, 
            BackWalkingDoor2is, 
            BackWalkingDoor3is, 
            BackWalkingDoor4is, 
            leftWalkingDoor1is, 
            leftWalkingDoor2is, 
            leftWalkingDoor3is, 
            leftWalkingDoor4is, 
            rightWalkingDoor1is, 
            rightWalkingDoor2is, 
            rightWalkingDoor3is, 
            rightWalkingDoor4is, 
            frontWalkingDoor1position, 
            frontWalkingDoor2position, 
            frontWalkingDoor3position, 
            frontWalkingDoor4position, 
            BackWalkingDoor1position, 
            BackWalkingDoor2position, 
            BackWalkingDoor3position, 
            BackWalkingDoor4position, 
            FrontSectionalDoorHeight1, 
            FrontSectionalDoorHeight2, 
            FrontSectionalDoorHeight3, 
            FrontSectionalDoorHeight4,  
            BackSectionalDoorHeight1, 
            BackSectionalDoorHeight2, 
            BackSectionalDoorHeight3, 
            BackSectionalDoorHeight4, 
            LeftSectionalDoorHeight1, 
            LeftSectionalDoorHeight2, 
            LeftSectionalDoorHeight3, 
            LeftSectionalDoorHeight4, 
            RightSectionalDoorHeight1, 
            RightSectionalDoorHeight2, 
            RightSectionalDoorHeight3, 
            RightSectionalDoorHeight4, 
            FrontSectionalDoorWidth1, 
            FrontSectionalDoorWidth2, 
            FrontSectionalDoorWidth3, 
            FrontSectionalDoorWidth4, 
            BackSectionalDoorWidth1,
            BackSectionalDoorWidth2, 
            BackSectionalDoorWidth3, 
            BackSectionalDoorWidth4, 
            LeftSectionalDoorWidth1, 
            LeftSectionalDoorWidth2, 
            LeftSectionalDoorWidth3, 
            LeftSectionalDoorWidth4, 
            RightSectionalDoorWidth1, 
            RightSectionalDoorWidth2, 
            RightSectionalDoorWidth3, 
            RightSectionalDoorWidth4, 
            FrontdoorRightDistance, 
            Frontdoor2RightDistance, 
            Frontdoor3RightDistance, 
            Frontdoor4RightDistance, 
            BackdoorRightDistance, 
            Backdoor2RightDistance, 
            Backdoor3RightDistance, 
            Backdoor4RightDistance, 
            LeftdoorRightDistance, 
            Leftdoor2RightDistance, 
            Leftdoor3RightDistance, 
            Leftdoor4RightDistance, 
            RightdoorRightDistance, 
            Rightdoor2RightDistance, 
            Rightdoor3RightDistance, 
            Rightdoor4RightDistance, 
            FrontdoorLeftDistance, 
            Frontdoor2LeftDistance, 
            Frontdoor3LeftDistance, 
            Frontdoor4LeftDistance, 
            BackdoorLeftDistance, 
            Backdoor2LeftDistance, 
            Backdoor3LeftDistance, 
            Backdoor4LeftDistance, 
            LeftdoorLeftDistance, 
            Leftdoor2LeftDistance, 
            Leftdoor3LeftDistance, 
            Leftdoor4LeftDistance, 
            RightdoorLeftDistance, 
            Rightdoor2LeftDistance, 
            Rightdoor3LeftDistance, 
            Rightdoor4LeftDistance, 
            leftWalkingDoor1position, 
            leftWalkingDoor2position, 
            leftWalkingDoor3position, 
            leftWalkingDoor4position, 
            rightWalkingDoor1position, 
            rightWalkingDoor2position, 
            rightWalkingDoor3position, 
            rightWalkingDoor4position, 
            FrontDoorPosition1, 
            FrontDoorPosition2, 
            FrontDoorPosition3, 
            FrontDoorPosition4, 
            BackDoorPosition1, 
            BackDoorPosition2, 
            BackDoorPosition3, 
            BackDoorPosition4, 
            LeftDoorPosition1, 
            LeftDoorPosition2, 
            LeftDoorPosition3, 
            LeftDoorPosition4, 
            RightDoorPosition1,
             RightDoorPosition2, 
             RightDoorPosition3, 
             RightDoorPosition4, 
             ExcelFile,
             WalkindoorHexColor
             ) 
        VALUES (
            '".$name."',
            '".$Solution."',
            '".$HouseNumber."',
            '".$Postcode."',
            '".$Place."',
            '".$Phone."',
            '".$email."',
            '".$bigbox."',
            '".$length."',
            '".$width."',
            '".$Gutter."',
            '".$Slope."',
            '".$Ridge."',
            '".$roof."',
            '".$walls."',
            '".$roofstyle."',
            '".$wallstyle."',
            '".$construction."',
            '".$doorHexColor."',
            '".$roofhexColor."',
            '".$wallcolor."',
            '".$frontSectionalDoor1is."',
            '".$frontSectionalDoor2is."',
            '".$frontSectionalDoor3is."',
            '".$frontSectionalDoor4is."',
            '".$BackSectionalDoor1is."',
            '".$BackSectionalDoor2is."',
            '".$BackSectionalDoor3is."',
            '".$BackSectionalDoor4is."',
            '".$leftSectionalDoor1is."',
            '".$leftSectionalDoor2is."',
            '".$leftSectionalDoor3is."',
            '".$leftSectionalDoor4is."',
            '".$rightSectionalDoor1is."',
            '".$rightSectionalDoor2is."',
            '".$rightSectionalDoor3is."',
            '".$rightSectionalDoor4is."',
            '".$frontWalkingDoor1is."',
            '".$frontWalkingDoor2is."',
            '".$frontWalkingDoor3is."',
            '".$frontWalkingDoor4is."',
            '".$BackWalkingDoor1is."',
            '".$BackWalkingDoor2is."',
            '".$BackWalkingDoor3is."',
            '".$BackWalkingDoor4is."',
            '".$leftWalkingDoor1is."',
            '".$leftWalkingDoor2is."',
            '".$leftWalkingDoor3is."',
            '".$leftWalkingDoor4is."',
            '".$rightWalkingDoor1is."',
            '".$rightWalkingDoor2is."',
            '".$rightWalkingDoor3is."',
            '".$rightWalkingDoor4is."',
            '".$FrontWalkinDoorPosition1."',
            '".$FrontWalkinDoorPosition2."',
            '".$FrontWalkinDoorPosition3."',
            '".$FrontWalkinDoorPosition4."',
            '".$BackWalkinDoorPosition1."',
            '".$BackWalkinDoorPosition2."',
            '".$BackWalkinDoorPosition3."',
            '".$BackWalkinDoorPosition4."',
            '".$FrontDoorHeight1."',
            '".$FrontDoorHeight2."',
            '".$FrontDoorHeight3."',
            '".$FrontDoorHeight4."',
            '".$BackDoorHeight1."',
            '".$BackDoorHeight2."',
            '".$BackDoorHeight3."',
            '".$BackDoorHeight4."',
            '".$LeftDoorHeight1."',
            '".$LeftDoorHeight2."',
            '".$LeftDoorHeight3."',
            '".$LeftDoorHeight4."',
            '".$RightDoorHeight1."',
            '".$RightDoorHeight2."',
            '".$RightDoorHeight3."',
            '".$RightDoorHeight4."',
            '".$FrontDoorWidth1."',
            '".$FrontDoorWidth2."',
            '".$FrontDoorWidth3."',
            '".$FrontDoorWidth4."',
            '".$BackDoorWidth1."',
            '".$BackDoorWidth2."',
            '".$BackDoorWidth3."',
            '".$BackDoorWidth4."',
            '".$LeftDoorWidth1."',
            '".$LeftDoorWidth2."',
            '".$LeftDoorWidth3."',
            '".$LeftDoorWidth4."',
            '".$RightDoorWidth1."',
            '".$RightDoorWidth2."',
            '".$RightDoorWidth3."',
            '".$RightDoorWidth4."',
            '".$FrontdoorRightDistance."',
            '".$Frontdoor2RightDistance."',
            '".$Frontdoor3RightDistance."',
            '".$Frontdoor4RightDistance."',
            '".$BackdoorRightDistance."',
            '".$Backdoor2RightDistance."',
            '".$Backdoor3RightDistance."',
            '".$Backdoor4RightDistance."',
            '".$LeftdoorRightDistance."',
            '".$Leftdoor2RightDistance."',
            '".$Leftdoor3RightDistance."',
            '".$Leftdoor4RightDistance."',
            '".$RightdoorRightDistance."',
            '".$Rightdoor2RightDistance."',
            '".$Rightdoor3RightDistance."',
            '".$Rightdoor4RightDistance."',
            '".$FrontdoorLeftDistance."',
            '".$Frontdoor2LeftDistance."',
            '".$Frontdoor3LeftDistance."',
            '".$Frontdoor4LeftDistance."',
            '".$BackdoorLeftDistance."',
            '".$Backdoor2LeftDistance."',
            '".$Backdoor3LeftDistance."',
            '".$Backdoor4LeftDistance."',
            '".$LeftdoorLeftDistance."',
            '".$Leftdoor2LeftDistance."',
            '".$Leftdoor3LeftDistance."',
            '".$Leftdoor4LeftDistance."',
            '".$RightdoorLeftDistance."',
            '".$Rightdoor2LeftDistance."',
            '".$Rightdoor3LeftDistance."',
            '".$Rightdoor4LeftDistance."',
            '".$LeftWalkinDoorPosition1."',
            '".$LeftWalkinDoorPosition2."',
            '".$LeftWalkinDoorPosition3."',
            '".$LeftWalkinDoorPosition4."',
            '".$RightWalkinDoorPosition1."',
            '".$RightWalkinDoorPosition2."',
            '".$RightWalkinDoorPosition3."',
            '".$RightWalkinDoorPosition4."',
            '".$FrontDoorPosition1."',
            '".$FrontDoorPosition2."',
            '".$FrontDoorPosition3."',
            '".$FrontDoorPosition4."',
            '".$BackDoorPosition1."',
            '".$BackDoorPosition2."',
            '".$BackDoorPosition3."',
            '".$BackDoorPosition4."',
            '".$LeftDoorPosition1."',
            '".$LeftDoorPosition2."',
            '".$LeftDoorPosition3."',
            '".$LeftDoorPosition4."',
            '".$RightDoorPosition1."',
            '".$RightDoorPosition2."',
            '".$RightDoorPosition3."',
            '".$RightDoorPosition4."',
            'uploads/".$randStr.".xlsx',
            '".$WalkindoorHexColor."'
            )";

if ($connect->query($query) === TRUE) {
  $mail = new PHPMailer(true);


  try {
      // Server settings
        $mail->isSMTP();

        $mail->Host = 'smtp.saleswizard.nl';
        $mail->SMTPAuth = true;
       $mail->Port = 587; 
       $mail->SMTPSecure = 'tls';
      $mail->Username = 'verkoop@levere.nl'; // YOUR email
      $mail->Password = 'czAWcOX4P'; // YOUR password

      // Sender and recipient settings
      $mail->setFrom('verkoop@levere.nl', 'Levere PVT LTD.');

       $mail->addBCC("salimkhanoffice@gmail.com", $name);
      $mail->addBCC("info@supremeanimation.com", $name);

     
      $mail->addAddress('verkoop@levere.nl', $name);   
     // $mail->addAddress('eryashsharma23@gmail.com', $name);
      // Setting the email content
      $mail->IsHTML(true);
      $mail->Subject = "{$name} sent us request";

    
  $mail->Body = '
    <div style="background:white;box-sizing: border-box;margin: 0;padding: 0px;justify-content: center;align-items: center;display: flex;">
      <section style="width: 650px;height: 100vh;font-family: sans-serif;box-sizing: border-box;">
          <header style="background: #3c5b81;width: 100%;height: 130px;box-sizing: border-box;">
              <a href="#" style="display: block;text-decoration: none;list-style: none;"><img src="https://levere.nl/3dloods/emailer/Levere-logo.png"
                      style="width: 203px;height: auto;object-fit: contain;padding: 25px;" alt="Levere-logo.png"></a>
          </header>
          <main style="height: auto;width:100%;background:white;box-sizing: border-box;clear: both;">
              <!-- heading start -->
              <div
                  style="width: 100%;height:auto;word-wrap: break-word;align-items: center;display: grid;justify-content: center;    padding: 3pc 0pc;">
                  <p style="text-align: center;font-size:24px;padding:0px;margin:0px;box-sizing: border-box;">
                      Quotation
                      application for Levere project
                  </p>
                  
              </div>
              <!-- end -->
              <!-- card start -->
              <div
                  style="box-sizing: border-box;width: 100%;height: 405px;justify-content: center;align-items: center;position: relative;padding: 20px;display: block;">
  
  
                  <div style="width: 47%;box-sizing: border-box;margin: 5px;float: left; background: #02723b;">
                      <!--tips: add .text-center,.text-right to the .card to change card text alignment-->
                      <img src="https://levere.nl/3dloods/emailer/excel.png" style="width: 100%;height:280px;object-fit:cover;background-position: center;"
                          alt="excel.png">
                      <div
                          style="width:100%;height: auto;background:#ef6c4e;box-sizing: border-box;display: flex;justify-content: center;align-items: center;">
                          <a href="https://levere.nl/3dloods/uploads/'.$randStr.'.xlsx"
                              style="position: relative !important;width: 100% !important;height: 70px !important;  background: #ef6c4e !important;display: flex !important; justify-content: center !important;align-items: center !important;text-align: center !important;text-decoration: none !important;list-style: none !important;">
                              <sapn style="color: #fff !important;font-size: 18px !important;font-weight : 600 !important;font-family: sans-serif !important;">
  
                                  Download Excel</sapn>
                          </a>
                      </div>
                  </div>
  
  
  
                  <div style="width: 47%;box-sizing: border-box;margin: 5px;float: right; background: #ef6c4e;">
                      <!--tips: add .text-center,.text-right to the .card to change card text alignment-->
                      <img src="https://www.supremeanimation.com/levere/emailer/vandevelde_3D.png"
                          style="width: 100%;height:280px;object-fit:cover;background-position: center;"  
                          alt="https://www.supremeanimation.com/levere/emailer/vandevelde_3D.png">
                      <div
                          style="width:100%;height: auto;background:#ef6c4e;box-sizing: border-box;display: flex;justify-content: center;align-items: center;">
                          <a  href="https://levere.nl/3dloods/3d_view/design.php?id='.$connect->insert_id.'"
                              style="position: relative !important;width: 100% !important;height: 70px !important;  background: #ef6c4e !important;display: flex !important; justify-content: center !important;align-items: center !important;text-align: center !important;text-decoration: none !important;list-style: none !important;">
                              <sapn style="color: #fff !important;font-size: 18px !important;font-weight: 600 !important;font-family: sans-serif !important;">
  
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
                              <p>Email:</p>
                              <p>Phone:</p>
                              <p>Note:</p>
                          </div>
                          <div style="width: 50%;text-align: left;padding:10px;">
                              <p>'.$name.'</p>
                              <p>'.$email.'</p>
                              <p>'.$Phone.'</p>
                              <p>'.$bigbox.'</p>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- end -->
              <!-- content div -->
              <div style="width: 100%;height: auto;box-sizing: border-box; padding: 20px;">
                  <h1 style="text-align: center; font-size: 50px;
                  font-family: Calibri; color: rgb(60, 91, 129); font-weight: bold; line-height: 1.2; text-align:
                      center;"> Basic data Levere. </h1>
                  <p style="font-size: 18px;font-family:  Calibri; color: rgb(0, 0, 0); line-height: 1.2; text-align:
                      center;">Below you see the basic data entered in the configurator.<br>
                      The complete set of data has been processed in the Excel.</p>
                  <div style=" width: 100%;height: auto;text-align: center;box-sizing: border-box;clear: both;">
                      <h2
                          style="font-size: 20px;font-family: Calibri;color: rgb(0, 0, 0);font-weight: bold;line-height: 1.2;text-decoration: underline grey;">
  
                          Data Levere:</h2>
                      <div style="text-align: center;width: 100%;height: auto;display: flex;">
                          <div style="width: 50%;text-align: right;padding:10px;">
                              <p>Length:</p>
                              <p>Width:</p>
                              <p>Gutter Height:</p>
                              <p>Roof Slope:</p>
                              <p>Ridge height:</p>
                          </div>
                          <div style="width: 50%;text-align: left;padding:10px;">
                              <p>'.$length.'</p>
                              <p>'.$width.'</p>
                              <p>'.$Gutter.'</p>
                              <p>'.$Slope.'</p>
                              <p>'.$Ridge.'</p>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- end -->
          </main>
  
          <footer
              style="width: 100%;height: 150px;background: url(https://levere.nl/3dloods/emailer/fotter.svg);background-size: cover;background-repeat: no-repeat;">
  
          </footer>
      </section>
    </div>
    ';
      $mail->send();

      echo "success";
  } catch (Exception $e) {
      echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
  }
  } else {
    echo "Something went wrong: {$connect->error}";
  }
}else{
    echo 'Email is required';
}




?>
