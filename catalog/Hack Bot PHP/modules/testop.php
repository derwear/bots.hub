<?php

function getRating($type){
	global $UserInfo,$userId,$Nick,$mysqli;
	$result_set = $mysqli->query("SELECT * FROM `users` ORDER BY `users`.`dollar` DESC");
	$i = 1;
	$str = '';
	while(($row = $result_set->fetch_assoc()) !=false){
		if ($row['role']>=2 
		if($row['nicknf']==0){
			$Nickc = $row['name'];
		}else{
			$Nickc = "[id".$row['id_VK']."|".$row['name']."]";
		}
		$str.= ConvertNumberEmoji($i).' '.$Nickc.' β π°'.ConvertValute($row['dollar'])."<br>";
		if($i>=10){
			if (getMyRating() != 'ΠΡ Π½Π΅ ΠΌΠΎΠΆΠ΅ΡΠ΅ Π±ΡΡΡ Π² ΡΠΎΠΏΠ΅.'){
				$str .= 'βββββββββββββββββ<br>'.getMyRating().' '.$Nick.' β π°'.ConvertValute($UserInfo['dollar']);
			}else{
				$str .= 'βββββββββββββββββ<br>'.getMyRating();
			}
			
			return $str;
		}
		$i+=1;
	}
	
}
?>