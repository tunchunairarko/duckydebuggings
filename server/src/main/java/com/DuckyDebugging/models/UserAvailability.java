package com.DuckyDebugging.models;

import lombok.Data;

@Data
public class UserAvailability {
    private int  id;
    private int userAcc_id;
    private String starting_date;
    private String ending_date;
}
