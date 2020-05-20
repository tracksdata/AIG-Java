package com;

import java.util.ArrayList;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		
		int numbers[]= {10,43,54,87,23};
		
		List<String> cities=new ArrayList<>();
		cities.add("HYD");
		cities.add("Chennai");
		cities.add("Mumbai");
		cities.add("Pune");
		
		for(int i=0;i<cities.size();i++) {
			System.out.println(cities.get(i));
		}
		
		for(String city:cities) {
			System.out.println(city);
		}
		
		cities.forEach(city->{ // scala
			System.out.println(city);
		});
		
		/*     cities.forEach(function(city){
		 *        
		 *        SOP(city)
		 *       }
		 * 
		 *         ); // function -> functional 
		 * 
		 * 
		 *    // Recursive function
		 *    
		 *    
		 *    // Object oriented - class
		 *    //  functional oriented -  ->
		 *    
		 * 
		 * 
		 */
		
		
		  String menu[]= {"idle","Vada","Poori","Chicken"};
		
	       

	}

}
