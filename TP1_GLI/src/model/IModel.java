package model;

public interface IModel {
	
	int size();

	double getValues(int i);

	double total();
	
	String getTitle();

	String getUnit();

	String getTitle(int i);

	String getDescription(int i);

}
